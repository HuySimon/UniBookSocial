const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, req.pathSave);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

exports.uploadSingleImg = (nameImageFile, pathSave) => (req, res, next) => {
  req.pathSave = pathSave;


  // Use upload.single() middleware with the correct function signature
  upload.single(nameImageFile)(req, res, function (err) {
    if (err) {
      return next();
    }

    if (req.file) {
      req.body[nameImageFile] = req.file.filename;
    }
    next();
  });
};
