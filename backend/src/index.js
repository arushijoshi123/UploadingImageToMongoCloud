const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const imageRouter = require("./routes/imageRoutes");
// Parse incoming requests with JSON payloads
const bodyParser = require("body-parser");
app.use(cors());


app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.text({ limit: '10mb' }));

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

//routes
app.use("/user", userRouter);


app.get("/", (req, res) => {
  res.send("WELCOME TO TWIN REALITY TASK BACKEND !!!");
});



// setupMulter 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploadedImages'); // Define the destination folder for uploaded images
  },
  filename: (req, file, cb) => {
    // Define how the image files should be named (you can use a unique ID generator)
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage ,
limits: {
    fileSize: 10 * 1024 * 1024, // 10MB in bytes
  },}).single('image');
app.use("/uploadedImages", express.static("uploadedImages"));
app.use('/image', upload, imageRouter);

const PORT = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("SERVER STARTED AT ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
