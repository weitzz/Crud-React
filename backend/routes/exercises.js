const express = require('express');
const router = express.Router()
let Exercise = require('../models/exercise.models')

router.get('/',(req,res)=>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(error => res.status(400).json('Error: ' + error));
   })


router.post('/add',(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.get('/:id',(req,res)=>{
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(error => res.status(400).json('Error: ' + error));
})

router.delete('/:id',(req,res)=>{
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(error => res.status(400).json('Error: ' + error));
})

router.post('/update/:id',(req,res)=>{
  Exercise.findById(req.params.id)
  .then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
      .then(() => res.json('Exercise updated!'))
      .catch(error => res.status(400).json('Error: ' + error));
  })
  .catch(error => res.status(400).json('Error: ' + error));
})


module.exports = router