import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ExperienceProvider } from "../../context/ExperienceProvider";
import { Experience } from "../../features/experience/components/Experience";
import { validateEmail } from "../../common/helpers/validation";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [eid, setEid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const eid = searchParams.get("eid");
    if (!eid || !validateEmail(eid)) {
      navigate("/login");
      return;
    }
    setEid(eid);
  }, [eid, setEid, navigate, searchParams]);

  return (
    <ExperienceProvider>
      <Experience eid={eid} />
    </ExperienceProvider>
  );
};
