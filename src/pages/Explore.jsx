import React from "react";
import "./Explore.css";
import img1 from "../assets/expimg1.jpg";
import img2 from "../assets/expimg2.jpg";
import img3 from "../assets/expimg3.jpg";
import img4 from "../assets/expimg4.jpg";
import img5 from "../assets/expimg5.jpeg";
import img6 from "../assets/expimg6.jpg";
import CheckIcon from "@mui/icons-material/Check";
const Explore = () => {
  const cards = [
    { id: 1, image: img1, text: "Gift stunning jwellery this diwali" },
    { id: 2, image: img2, text: "Outfits for diwali parties" },
    { id: 3, image: img3, text: "Beautiful diwali wallpapers" },
    { id: 4, image: img4, text: "Bright $ easy rangoli designs" },
    { id: 5, image: img5, text: "Cozy home inspo" },
    { id: 6, image: img6, text: "Colour pop diwali gifts" },
  ];
  const getCurrentDate = () => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
  };
  return (
    <div className="explore-page">
      <div className="date-display">
        <p>{getCurrentDate()}</p>
      </div>

      <h1 className="stay-inspired">Stay Inspired</h1>

      <div className="explore-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.text} className="card-image" />
            <div className="card-text">{card.text}</div>
          </div>
        ))}
      </div>
      <div className="center-card">
        <div className="card">
          <img src={img1} alt="card-text" className="card-image" />
          <div className="card-text">Unique diwali gifts for your friends</div>
        </div>
      </div>
      <div className="inspiration-footer">
        <div className="tick-icon-container">
          <CheckIcon className="tick-icon" />
        </div>
        <h2>That's all for today!</h2>
        <p>Come back tomorrow for more inspiration</p>
        <button className="go-home-button">Go to Home Feed</button>
      </div>
      <div className="question-mark">
        ?<div className="tooltip">More</div>
      </div>
    </div>
  );
};

export default Explore;
