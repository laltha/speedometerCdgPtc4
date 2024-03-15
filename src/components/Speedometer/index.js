// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onDecrement = () => {
    this.setState(previousState =>
      previousState.speed > 0 ? {speed: previousState.speed - 10} : {count: 0},
    )
  }

  onIncrement = () => {
    this.setState(previousState =>
      previousState.speed < 200
        ? {speed: previousState.speed + 10}
        : {speed: 200},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="small-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            className="image1"
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttonContainer">
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="button2"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
