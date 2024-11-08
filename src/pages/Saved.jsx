import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { SavedContext } from "../Context/SavedContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Saved.css";

const Saved = () => {
  const { savedImages, removeImageFromSaved } = useContext(SavedContext);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

  const handelDelete = (imageToDelete) => {
    removeImageFromSaved(imageToDelete);
  };

  return (
    <div className="saved-container">
      {savedImages.length > 0 ? (
        <>
          <h2 className="saved-txt">Saved Images</h2>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {savedImages.map((image, index) => (
              <div key={index} className="image-wrapper">
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="saved-img"
                  style={{ width: "100%", borderRadius: "15px" }}
                />
                <DeleteIcon
                  className="delete-icon"
                  onClick={() => handelDelete(image)}
                />
              </div>
            ))}
          </Masonry>
        </>
      ) : (
        <h2 className="not-saved-txt">No images saved yet!</h2>
      )}
    </div>
  );
};

export default Saved;
