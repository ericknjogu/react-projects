import { useState } from "react";
import Accordian from "./components/accordian/index.";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/imageSlider";
import LoadMoreProducts from "./components/LoadMoreProducts";

function App() {
  return (
    <>
      {/*<StarRating noOfStars={10} />*/}

      {/*<ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"20"}
        page={"1"}
      />*/}

      <LoadMoreProducts />
    </>
  );
}

export default App;
