import Image from "next/image";
import LandingPage from "./home/LandingPage/page";
import Aboutus from "./home/aboutus/page";
import Services from "./home/services/page";
import Feedback from "./home/feedback/page";
import Contact from "./home/contact/page";

export default function Home() {
  return (
    <>
    <LandingPage/>
    <Aboutus/>
    <Services/>
    <Feedback/>
    <Contact/>
    </>
  );
}
