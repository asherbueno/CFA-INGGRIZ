import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }
  };

  componentDidMount() {
    this.getIngredientList();
  };

  getIngredientList() {
    const URL = 'https://aqueous-garden-51041.herokuapp.com/api/v1/ingredients/'
    axios.get(URL)
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Recipes Frontend</h1>
        <IngredientForm
          getIngredientList={() => this.getIngredientList()} />
        {this.state.ingredients.length < 1 ? <p>Loading...</p> : <IngredientList ingredients={this.state.ingredients} />}
      </div>
    );
  }
}

export default App;
