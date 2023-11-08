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
  }, []);

  return (
    <div>
      <AudioPlayer src={``} />
    </div>
  );
};
