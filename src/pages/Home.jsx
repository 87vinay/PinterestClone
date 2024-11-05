import React from "react";
import ImageFetcher from "../Components/ImageFetcher";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
     <div className="masonry-container">
     <ImageFetcher />
     </div>
    </div>
  );
};

export default Home;
