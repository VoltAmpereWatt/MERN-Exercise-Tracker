import React from 'react';
// Now import react router. Makes it easier route different URLs to different components
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exercise-list.component";
import EditExercises from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


// Everything to be used with router inside of a router element.
function App() {
    return (
      <Router>
        <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercises} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    );
  }
  
  export default App;