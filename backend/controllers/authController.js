const validUser = {email: 'my_super-email@anon.org', password: 'mY_V3ry-H@rd_paSsW0rd'}

module.exports = {
  signIn: function(req, res, next){ 
    if(req.body.email == validUser.email && req.body.password == validUser.password){
      res.json({
        id: 1,
        username: 'H@rd_C0d3rs',
        isAdmin: true,
      })
    }
    else {
      res.status(402).json({message: "Auth failed !"})
    }
  }
}