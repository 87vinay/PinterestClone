import React from "react";
import { Add } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./Create.css";

const Create = () => {
  return (
    <div className="create-page">
      <hr className="navbar-line" />
      <div className="vertical-line"></div>

      <div className="icons-container">
        <div className="icon-wrapper">
          <KeyboardDoubleArrowRightIcon className="icon" />
        </div>
        <div className="icon-wrapper">
          <Add className="icon" />
        </div>
      </div>

      <div className="create-pin-text">
        <h1>Create Pin</h1>
        <hr className="below-pin-line" />
      </div>

      <hr className="middle-line" />

      <div className="container">
        <div className="light-gray-box">
          <div className="upload-section">
            <span className="upload-icon">
              <ArrowUpwardIcon />
            </span>
            <p className="upload-text">
              Choose a file or drag and drop it here
            </p>
          </div>
          <p className="recommendation-text">
            We recommend using high-quality .jpg files less <br />
            than 20MB or .mp4 files less than 200MB
          </p>
        </div>

        <div className="form-container">
          <h2 className="form-title">Title</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Add a title"
          />
          <h2 className="form-description">Description</h2>
          <textarea
            className="textarea-field"
            placeholder="Add a detailed description"
          ></textarea>
          <h2 className="form-title">Link</h2>
          <input type="text" className="input-field" placeholder="Add a link" />
          <h2 className="form-title">Board</h2>
          <input
            type="text"
            className="input-field"
            placeholder="choose a board"
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
