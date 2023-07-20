import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ userId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server for the specific user
    axios.get(`https://uploadimagetomongodbapi.onrender.com/${userId}`)
      .then(res => {
        // Assuming the images are inside the "allimages" field of the response object
        setImages(res.data.allimages);
      })
      .catch(err => console.log(err));
  }, [userId]); // Trigger the effect whenever userId changes

  return (
    <div >
      <h2>Uploaded Images</h2>
      {images && images.length > 0 ? (
        <div className={styles.imageGrid}>
          {images.map((image, index) => (
            // Check if the 'image.image' property is defined before rendering the image
            image.image && (
              <img
               
                key={index}
                src={`hhttps://uploadimagetomongodbapi.onrender.com/${image.image}`}
                alt={`Image ${index}`}
                className={styles.imageItem}

              />
            )
          ))}
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};




export default ImageGallery;