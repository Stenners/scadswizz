import Hls, { Events, FragParsingMetadataData } from "hls.js";

let hls: Hls;
let previousTitle: string;

export const checkAudioEnded = (
  artworkUrl?: string,
  currentSystemUTCTime = new Date()
) => {
  if (!artworkUrl) {
    return false;
  }
  const [, timeStamp, , audioLength] = artworkUrl.split(/(?:=|&)+/);
  if (!timeStamp || !audioLength) {
    return false;
  }
  const expectedAudioEndTime = new Date(
    (Number(timeStamp) + Number(audioLength) + 60) * 1000
  );

  return currentSystemUTCTime >= expectedAudioEndTime;
};

export const extractArtistTitle = (trackInfo: string) => {
  if (
    trackInfo?.toLocaleLowerCase().includes("advertisement") ||
    trackInfo?.toLocaleLowerCase().includes("adswizz")
  ) {
    return {
      artist: "",
      title: "",
    };
  }
  const [artist = "", title = ""] = trackInfo.split(" - ");

  return {
    artist,
    title,
  };
};

// Example of metadata return from frag.title
// 'title="Lily Allen - Somewhere Only We Know",url="https://nowplaying.scahw.com.au/s/listnr.png?t=1658299639&l=204"'
// 'title="Parmalee - Take My Name",artist="Parmalee - Take My Name",url="https://nowplaying.scahw.com.au/s/mmm.png?t=1680050577&l=153"'

export const extractTrackInfo = (data: FragParsingMetadataData) => {
  const trackData = data?.frag?.title || "";
  const relUrl = data?.frag?.relurl ?? "";

  // this regular expresion uses a group feature to capture if existing in the following details title, artist and url
  // the first parameter captured is the full string follow by title, artist and url.
  // artist is currently not being used but its a new parameter and at the moment is similar to trackinfo
  const regex =
    /(?:title="([^"]*)")?(?:,)?(?:artist="([^"]*)")?(?:,)?(?:url="(?=http[s]?:\/\/|www\.)([^"]*)")?/;

  const match = regex.exec(trackData) ?? [];

  const [, trackInfo = "", artistDetail, artworkUrl = ""] = match;

  if (artistDetail && artistDetail !== trackInfo) {
    return {
      artist: artistDetail,
      title: trackInfo,
      artworkUrl,
      relUrl,
    };
  }

  const { artist, title } = extractArtistTitle(trackInfo);

  return {
    artist,
    title,
    artworkUrl,
    relUrl,
  };
};

export const initialise = (
  player: HTMLAudioElement,
  sourceUrl: string,
  updateTrackInfoAction?: any
) => {
  if (!sourceUrl) {
    return;
  }
  hls = new Hls();

  hls.attachMedia(player);
  hls.on(Hls.Events.MEDIA_ATTACHED, () => {
    hls.loadSource(sourceUrl);
  });

  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    hls.startLoad();
  });

  hls.on(
    Hls.Events.FRAG_PARSING_METADATA,
    (event: Events, data: FragParsingMetadataData) => {
      const { artist, title, artworkUrl, relUrl } = extractTrackInfo(data);
      const audioEnded = checkAudioEnded(artworkUrl);

      console.log(relUrl);

      if (audioEnded && updateTrackInfoAction) {
        updateTrackInfoAction("", "");

        return;
      }

      if (updateTrackInfoAction) {
        updateTrackInfoAction(artist, artworkUrl, title, relUrl);
      }
    }
  );
};

export function detachAndDestroy() {
  if (hls) {
    previousTitle = "";
    hls.stopLoad();
    hls.detachMedia();
    hls.destroy();
  }
}
