import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../visitor/Card";
export default function LastProject() {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/projects/")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  const cards = allProjects.map((data) => <Card data={data} key={data._id} />);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-sky-500 tracking-widest font-medium title-font mb-1">
            LATEST CHALLENGES
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Our newest Challenges
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">{cards}</div>
        <div className="flex flex-col text-center w-full mt-10">
          <Link
            to="/Challenges"
            className="text-rose-500 tracking-widest font-medium title-font mb-1 text-center self-center flex items-center "
          >
            <span className="cursor-pointer">Learn More</span>
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
