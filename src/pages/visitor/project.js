import NavBar from "../../components/visitor/NavBar";
import Footer from "../../components/visitor/CallToAction";
import Detail from "../../components/visitor/Detail";
import ChallengeDetail from "./ChallengeDetail";
import Comments from "../../components/visitor/Comments";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/projects/" + id)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <NavBar />
      <Detail project={project} />
      <ChallengeDetail project={project}/>
      <Comments />
      <Footer />
    </div>
  );
}
