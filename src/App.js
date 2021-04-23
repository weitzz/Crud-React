import React from 'react'
import  './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import ExercisesList from './components/List/exercisesList'
import EditExercise from './components/Exercise/editExercise'
import CreateExercise from './components/Exercise/createExercise'
import CreateUser from './components/User/createUser'


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
