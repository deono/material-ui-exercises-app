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
    // create the initial set of categories to maintain the category list,
    // incase all the exercises in a category get deleted.
    const initialExercises = muscles.reduce((exercises, muscles) => {
      return {
        ...exercises,
        [muscles]: []
      };
    }, {});

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        // destructure out the muscle property from the object
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        // return the exercises
        return exercises;
      }, initialExercises)
    );
  }

  handleExerciseDelete = id => {
    // return all the exercises that dont match the id
    this.setState(prevState => {
      return {
        exercises: prevState.exercises.filter(exercise => exercise.id !== id)
      };
    });
  };

  handleCategorySelect = category => {
    this.setState({ category });
  };

  handleExerciseSelect = id => {
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
          onDelete={this.handleExerciseDelete}
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
