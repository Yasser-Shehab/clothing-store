import React from "react";
import Categories from "../../components/Categories/Categories";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Section-Title/Title";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Title />
      <Categories />
    </>
  );
}

export default Home;
