const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.name + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const uploadImgMiddleware = (req, res, next) => {
  console.log(req.body.mainImage)
  upload.single('mainImage')
  req.body.mainImage = req.body.mainImage.name
  next()
}

module.exports = uploadImgMiddleware