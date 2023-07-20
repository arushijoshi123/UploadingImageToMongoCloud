import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import ImageGallery from "../components/ImageGallery";

const Image = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    // Assume the token is stored in localStorage under the key 'token'
    const token = localStorage.getItem("mykey");

    // Decode the token to get userId (using jwt_decode or any other library)
    // This is just an example. You should use an appropriate library to decode the token securely.
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.userId;
    setUserId(userId);
  }, []);

  const handleUpload = (e) => {
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("userid", userId);
    axios
      .post("https://uploadapisrc.onrender.com/image/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleShowGallery = () => {
    setShowGallery(true);
  };

  return (
    <div>
      <h1>Image Upload Page</h1>
      <input
        type="file"
        onChange={(e) => setSelectedImage(e.target.files[0])}
        accept="image/*"
      />

      <button onClick={handleUpload}>Upload</button>
      {/* Button to show the uploaded images */}
      <button onClick={handleShowGallery}>Show Uploaded Images</button>

      {/* Conditional rendering of ImageGallery component */}
      {showGallery && <ImageGallery userId={userId} />}
    </div>
  );
};

export default Image;
