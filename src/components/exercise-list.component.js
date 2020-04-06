import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = props =>{
    return (<tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring}</td>  
        <td>
        {/* link to delete method available. calls deleteExercise function */}
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={( ) => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>)
}

export default class ExerciseList extends Component{
    constructor(props){
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {exercises:[]};
    }
    // get list of exercises from database
    // runs before page is rendered
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
    // id is the object id of the exercise that we'll be deleting
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res=> console.log(res.data));
        // remove the exercise from the exercise list
        this.setState({
            // only return elements if element id doesn't equal input id.
            exercises:this.state.exercises.filter(el => el._id !== id)
        });
    }

    exerciseList(){
        return this.state.exercises.map(current => {
            return <Exercise exercise={current} deleteExercise={this.deleteExercise} key={current._id} />;
        })
    }

    render() {
        return (
          <div>
            <h3>Logged Exercises</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.exerciseList() }
              </tbody>
            </table>
          </div>
        )
      }
    }