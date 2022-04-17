import React from "react";
import Categories from "../components/Categories/Categories";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Title from "../components/Section-Title/Title";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Title />
      <Categories />
    </>
  );
}

export default Home;