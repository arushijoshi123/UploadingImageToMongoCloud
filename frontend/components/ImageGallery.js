import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = ({ userId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from the server for the specific user
    axios
      .get(`https://uploadimagetomongodbapi.onrender.com/image/${userId}`)
      .then((res) => {
        // Assuming the images are inside the "allimages" field of the response object
        setImages(res.data.allimages);
      })
      .catch((err) => console.log(err));
  }, [userId]); // Trigger the effect whenever userId changes

  return (
    <div className="image-gallery">
      <h2>Uploaded Images</h2>
      {images && images.length > 0 ? (
        <div>
          {images.map(
            (image, index) =>
              // Check if the 'image.image' property is defined before rendering the image
              image.image && (
                <img
                  width={100}
                  height={100}
                  key={index}
                  src={`https://uploadimagetomongodbapi.onrender.com/${image.image}`}
                  alt={`Image ${index}`}
                  className="image-item"
                />
              )
          )}
        </div>
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

export default ImageGallery;
