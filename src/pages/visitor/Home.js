import NavBar from "../../components/visitor/NavBar";
import Hero from "../../components/visitor/Hero";
import Feature from "../../components/visitor/Feature";
import LastProject from "../../components/visitor/LastProject";
import CallToAction from "../../components/visitor/CallToAction";

export default function Home() {
  return (
    <div className="px-9">
      <NavBar />
      <Hero />
      <Feature />
      <LastProject />
      <CallToAction />
    </div>
  );
}
