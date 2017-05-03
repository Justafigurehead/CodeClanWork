var express = require('express');
dogRouter = express.Router();

var dogs = ['Golden Retriever', 'German Shepherd', 'Cocker Spaniel', 'Bearded Collie'];

dogRouter.get('/:id', function(req, res){
  res.json({data: dogs[req.params.id]});
});

dogRouter.get('/', function(req,res){
  res.json({data: dogs});
});

dogRouter.put('/:id', function(req, res){
  dogs[req.params.id]  = req.body.dog;
  res.json({data: dogs});
});

dogRouter.delete('/:id', function(req, res){
  dogs.splice(req.params.id, 1);
  res.json({data: dogs});
});

dogRouter.post('/', function(req, res){
  dogs.push(req.body.dog);
  res.json({data: dogs});
})

module.exports = dogRouter;

