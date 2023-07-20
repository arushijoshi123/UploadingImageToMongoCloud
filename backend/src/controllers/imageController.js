const imageModel = require("../models/imageUploaded");
// upload image
const uploadimage = async (req, res) => {
 
    if (!req.file) {
    return res.status(400).json({ message: 'No image file provided' });
  }

 
  const { userid } = req.body;

  // Save the image data to MongoDB
  const image = new imageModel({
    userid: userid,
    image: req.file.path, // Multer provides the file path in req.file
  });
  try {
    await image.save();
    res.status(200).json({ message: 'Image uploaded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving image to database' });
  }
  
  
};

//get image
const getimage = async (req, res) => {
  try {
    const id = req.params.id;
    const allimages = await imageModel.find({ userid: id });
    if (allimages.length === 0) {
      return res.status(404).json({ message: 'No images found for this user ID' });
    }

    // Return the images in the response
    res.status(200).json({ allimages });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Something went wrong while Getting Image !!!" });
  }
};

module.exports = { uploadimage, getimage };
