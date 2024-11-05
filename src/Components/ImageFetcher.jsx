import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Masonry from "react-masonry-css";

const ImageFetcher = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=eaI1mby7R1A_0cqvCVt41IZtxvbcRcDqbR1X1w7uJ3o&per_page=10&page=${page}`
    );
    setImages((prevImages) => [...prevImages, ...response.data]);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {images.map((image, index) => (
          <div key={index}>
            <div className="image-container">
              <img
                src={image.urls.small}
                alt={image.alt_description}
                style={{ width: "100%", borderRadius: "15px" }}
              />
              <button className="save-button">Save</button>
              <div className="icon-container">
                <div className="icon-wrapper">
                  <UpgradeIcon className="icon" />
                </div>
                <div className="icon-wrapper">
                  <MoreHorizIcon className="icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default ImageFetcher;