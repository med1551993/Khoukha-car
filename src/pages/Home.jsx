import React from "react";
import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import BookCar from "../components/BookCar";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar/>
      <PlanTrip />
      <PickCar />
      <ChooseUs />
      <Faq />
    </>
  );
};

export default Home;
