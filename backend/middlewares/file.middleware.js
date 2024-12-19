const multer = require("multer");
const path = require("path");

//Set Storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 100000 }, //1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb); //Check file exit
  },
}).single("file");

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|git|webp/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype && extName) {
    return cb(null, true);
  } else {
    cb("Error:Image Only ! ");
  }
}

module.exports = { upload };
