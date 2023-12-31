// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="phraseText">
                Enter The Phrase
              </label>
              <input
                type="text"
                id="phraseText"
                className="inputText"
                placeholder="Enter The Phrase"
                onChange={this.onChangeInputPhrase}
                value={inputPhrase}
              />
            </div>
            <p className="letter-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt=" letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
