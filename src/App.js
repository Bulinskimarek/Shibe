import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgNum: 1,
      animal: 'random',
      isLoading: false,
      data: []
    };
  }

  handleImgNumChange(event) {
    this.setState({ imgNum: event.target.value });
  }
  handleAnimalChange(event) {
    this.setState({ animal: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ data: [], isLoading: true });
    let animal = this.state.animal
    if (this.state.animal === "random") animal = (this.randomAnimal())
    axios.get('https://cors-anywhere.herokuapp.com/https://shibe.online/api/' + animal + '?count=' + this.state.imgNum)
      .then(response => {
        console.log(response.data)
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  }

  randomAnimal() {
    let animals = ["shibes", "cats", "birds"]
    return animals[Math.floor(Math.random() * 3)]
  }

  render() {
    return (
      <div >
        <Form 
        isLoading={this.state.isLoading} 
        imgNum = {this.state.imgNum} 
        animal = {this.state.animal}
        handleImgNumChange = {(e)=>this.handleImgNumChange(e)}
        handleAnimalChange = {(e)=>this.handleAnimalChange(e)}
        handleSubmit = {(e)=>this.handleSubmit(e)} 
        />

        <div 
          style={{ marginTop: "40px", textAlign: "center" }}>
          {this.state.data.map((pic, index) =>
            <img style={{ height: "200px", width: "200px" }}
              key={index}
              src={pic} 
            />)}
        </div>

      </div>
    );
  }
}

export default App;
