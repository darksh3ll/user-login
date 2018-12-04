var express = require('express');
var router = express.Router();
const uploadController = require("../controllers/uploadController")

var path = require('path')
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

var upload = multer({ 
  storage: storage,
  
  fileFilter (req, file, cb) {
    console.log(file.mimetype)
    if(!file.mimetype.includes('image/png')){
      return cb(null, false)
    }
    return cb(null, true)
  }
})


router.post('/', upload.single('avatar'), uploadController.file);

module.exports = router;