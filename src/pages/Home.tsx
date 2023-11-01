import { useEffect } from "react";
import { searchMangas } from "../utils/api";
import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

const Home = () => {
  useEffect(() => {
    searchMangas({ title: "solo leveling" });
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-3">
      <Construction size={120} className="" />
      <h1 className="text-3xl">
        Still in development, go to{" "}
        <Link to={"/library"} className="text-rose-300">
          library
        </Link>
      </h1>
    </div>
  );
};

export default Home;
