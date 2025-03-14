import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const UTMHandler = () => {
  const { search } = useLocation();
  const { setMode } = useAppContext();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const utm = params.get("utm");
    if (utm) {
      const lowerUtm = utm.toLowerCase();
      if (lowerUtm.includes("kids")) {
        setMode("child");
      } else if (lowerUtm.includes("clinic")) {
        setMode("adult");
      }
    }
  }, [search, setMode]);

  return null;
};

export default UTMHandler;
