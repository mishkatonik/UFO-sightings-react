import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// fetch JSON data and hold it in this const, then put it in the state below
// const availableStates = 


class App extends Component {
  state = {
    availableStates: 
      [
        {
          "state": "ak",
          "sightings": 319
        },
        {
          "state": "al",
          "sightings": 642
        },
        {
          "state": "ar",
          "sightings": 588
        }
      ],
    selectedStates: [],
  }

  componentDidMount = () => {
    fetch("sightings-by-state.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
  }


// modified from quiditch activity, 4.1 activity 1
  onStateSelect = (index) => {
    console.log('getting state selection...');

    // copy both arrays for manipulation
    const availableStates = this.state.availableStates.slice();
    const selectedStates = this.state.selectedStates.slice();
    
    //indicate which state is being selected
    const desiredState = this.state.availableStates[index];

    // check if the desiredState is already selected
    if (selectedStates.indexOf(desiredState) > -1) {
      
      return;

    } else {
      
      // add the state to selected
      selectedStates.push(desiredState);
      
      // update state and re-render
      this.setState({
        availableStates: availableStates,
        selectedStates: selectedStates,
      }); 
    } 
  }

  removeStateSelect = (index) => {
    console.log('removing state from selection...')

    // copy both arrays for manipulation
    const availableStates = this.state.availableStates.slice();
    const selectedStates = this.state.selectedStates.slice();
    
    //indicate which state is being removed
    const desiredState = this.state.availableStates[index];
    
    //remove the state from selected
    selectedStates.splice(index, 1);
        
    // update state and re-render
    this.setState({
      availableStates: availableStates,
      selectedStates: selectedStates,
    });
  }


  render() {
    return (
      <div>
        <div className="NavBar">
          <h1>UFO Sightings by State</h1>
          <a href="#" className="NavBtn">Home</a>
          <a href="#" className="NavBtn">About</a>
        </div>

        <div className="StateCheckboxContainer">
          {
              this.state.availableStates.map((stateInfo, index) => (
                  <label>
                    <input 
                      type="checkbox" 
                      className="checkboxItem"
                      value={stateInfo.state}
                      onClick={
                        () => this.onStateSelect(index)
                      } />
                    {stateInfo.state}
                  </label>
              ))
          }
        </div>

        <div className="graphContainer">
        </div>
      </div>
    );
  }
}

export default App;



// check if an item exists in an array:

// var arr = ["steve", "bob", "john"];
// console.log(arr.indexOf("bob") > -1);    ----> returns true
