import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AudioPlayer } from "../../features/audio/components/AudioPlayer";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const eid = searchParams.get("eid");
    if (!eid) {
      navigate("/login");
    }
  });

  return (
    <div className="w-full flex justify-center">
      <div className="py-12 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex items-center justify-center flex-col">
        <AudioPlayer
          src={`
        /audio/5mg.mp3`}
        />
      </div>
    </div>
  );
};
