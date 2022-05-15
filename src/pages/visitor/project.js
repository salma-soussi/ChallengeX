import NavBar from "../../components/visitor/NavBar";
import Footer from "../../components/visitor/CallToAction";
import Detail from "../../components/visitor/Detail";
import ChallengeDetail from "./ChallengeDetail";
import Comments from "../../components/visitor/Comments";

export default function Project() {
  return (
    <div>
      <NavBar />
      <Detail />
      <ChallengeDetail />
      <Comments /> 
      <Footer />
    </div>
  );
}
