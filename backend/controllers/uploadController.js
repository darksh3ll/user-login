module.exports = {
  file: function(req, res, next){
    const url = req.protocol + '://' + req.headers.host + '/files/' + req.file.filename
    res.json({url})
  }
}