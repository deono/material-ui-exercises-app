import React, { Component, Fragment } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Exercises from "./components/excercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises: exercises,
    category: "",
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        // destructure out the muscle property from the object
        const { muscles } = exercise;

        // the initial value of the iteration is set to an empty object
        // take the exercise and conditionally assign a property on it
        exercises[muscles] = exercises[muscles]
          ? // if there is already something stored in that property
            // spread out the elements from that array into a new array and pass the exersise object
            [...exercises[muscles], exercise]
          : // otherwise create a new array with the current exercise object
            [exercise];
        // return the exercises
        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  handleExerciseSelected = id => {
    this.setState(prevState => {
      // return the exercise matching the selected id
      return {
        exercise: prevState.exercises.find(ex => ex.id === id)
      };
    });
  };

  handleExerciseCreate = exercise => {
    // method adds a new exercise object to the state
    this.setState(prevState => {
      return { exercises: [...prevState.exercises, exercise] };
    });
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    return (
      <Fragment>
        <Header muscles={muscles} onCreate={this.handleExerciseCreate} />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
