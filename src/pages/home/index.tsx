import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const HomePage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const eid = searchParams.get("eid");
    if (!eid) {
      navigate("/login");
    }
  }, []);
  return <div>home</div>;
};
