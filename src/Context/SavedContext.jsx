import React, { createContext, useState } from "react";

export const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  // Initialize savedImages state from localStorage
  const [savedImages, setSavedImages] = useState(() => {
    const saved = localStorage.getItem("savedImages");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // Add image to saved images and update localStorage
  const addImageToSaved = (image) => {
    setSavedImages((prevImages) => {
      const updatedImages = [...prevImages, image];
      console.log("Added to saved images:", updatedImages);
      // Update localStorage
      localStorage.setItem("savedImages", JSON.stringify(updatedImages));
      return updatedImages;
    });
  };

  // Remove image from saved images and update localStorage
  const removeImageFromSaved = (image) => {
    setSavedImages((prevImages) => {
      const updatedImages = prevImages.filter((savedImage) => savedImage.id !== image.id);
      console.log("Images after deletion:", updatedImages);

      // Update localStorage immediately after deletion
      localStorage.setItem("savedImages", JSON.stringify(updatedImages));
      return updatedImages;
    });
  };

  return (
    <SavedContext.Provider value={{ savedImages,setSavedImages, addImageToSaved, removeImageFromSaved }}>
      {children}
    </SavedContext.Provider>
  );
};
