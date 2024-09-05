import { useState } from "react";
import Accordian from "./components/accordian/index.";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";

function App() {
  return (
    <>
      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
