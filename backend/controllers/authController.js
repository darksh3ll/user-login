const validUser = {email: 'david.messagerie@hotmail.fr', password: 'test1234'}

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
      res.status(401).json({message: "Auth failed !"})
    }
  }
}