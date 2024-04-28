// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0, text: `Even`}
  increase = () => {
    this.setState(prevState => ({
      num: prevState.num + Math.floor(Math.random() * 101),
    }))
    if (this.state.num % 2 === 0) {
      this.setState({text: `Even`})
    } else {
      this.setState({text: `Odd`})
    }
  }

  render() {
    const {num, text} = this.state
    return (
      <div className="main-cont">
        <div className="bg-cont">
          <div>
            <h1 className="heading">Count {num}</h1>
            <p className="para">Count is {text}</p>
            <button type="button" className="button" onClick={this.increase}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 t0 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
