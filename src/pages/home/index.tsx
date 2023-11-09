import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ExperienceProvider } from "../../context/ExperienceProvider";
import { Experience } from "../../features/experience/components/Experience";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const eid = searchParams.get("eid");
    if (!eid) {
      navigate("/login");
      return;
    }
  });

  return (
    <ExperienceProvider>
      <Experience />
    </ExperienceProvider>
  );
};
