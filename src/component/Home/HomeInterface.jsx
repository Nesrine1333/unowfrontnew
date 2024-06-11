import React from "react";
import Categories from "./Categories";
import Featured from "./Featured Trainers";
import About from "./AboutUs";
import UpSkill from "./UpSkill";
import Footer from "./Footer";
import Main from "../Main";

const HomeInterface = () => {
  return (
    <div>
      <Main />
      <Categories />
      <Featured />
      <About />
      <UpSkill />
      <Footer />
    </div>
  );
};

export default HomeInterface;
