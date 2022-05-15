import Card from "../../components/visitor/Card";
import Footer from "../../components/visitor/CallToAction";
import NavBar from "../../components/visitor/NavBar";
import { useEffect, useState } from "react";

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/projects/")
      .then((res) => res.json())
      .then((data) => setAllProjects(data));
  }, []);
  const cards = allProjects.map((data) => <Card data={data} key={data._id} />);
  return (
    <div>
      <NavBar />
      <section className="text-gray-600 body-font w-11/12 self-center">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <select
            className="block  text-gray-700 py-2 mb-3 px-3 bg-transparent  focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:bg-transparent self-end text-right"
            name="animals"
          >
            <option className="text-left bg-transparent" value="">
              Sort
            </option>
            <option className="text-left" value="Design">
              Design
            </option>
            <option className="text-left" value="Algorithm">
              Algorithm
            </option>
          </select>

          <div className="flex flex-wrap -m-4  items-center">
            {cards}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
