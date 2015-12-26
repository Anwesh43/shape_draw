var express = require('express');
var router = express.Router();


module.exports = function(socket) {
  router.post('/postShape',function(req,res){
    console.log('received');
      var shapeBody = req.body;
      console.log(shapeBody);
      res.send('successfully posted');
      socket.emit('newShape',req.body);

  });
  return router;
};
