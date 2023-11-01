import { useEffect } from "react";
import { searchMangas } from "../utils/api";

const Home = () => {
  useEffect(() => {
    searchMangas({ title: "solo leveling" });
  }, []);

  return (
    <div>
      <h1 className="h-96">hello guys</h1>
    </div>
  );
};

export default Home;
