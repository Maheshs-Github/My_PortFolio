import React from "react";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSocialSideBar from "./LeftSocialSideBar";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {
  return (
    <div className="w-screen bg-primary">
      <div className="2xl:flex 2xl:justify-center">
        <div className="2xl:w-[1440px] 3xl:px-0 px-[20px] pt-[30px] sm:px-[100px] sm:pt-[70px]">
          <Intro />
          <About />
          <Experiences title="Experience" />
          <Projects title="Projects" />
          <Education title="Education" />
          <Contact title="Say Hello" />
          <Footer />
        </div>
      </div>
      <LeftSocialSideBar />
    </div>
  );
};

export default Home;
