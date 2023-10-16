const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.name + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

exports.uploadSingleImg = (nameImageFile) => {
  return (req, res, next) => {
    upload.single(nameImageFile)
    console.log(req.body)
    req.body[`${nameImageFile}`] = req.file.filename

    next()
  }
}

