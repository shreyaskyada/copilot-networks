import { useEffect } from "react";
import Members from "./components/Members/Members";

const Teams = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Members />
    </div>
  );
};

export default Teams;
