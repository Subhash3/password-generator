import React, { Component } from 'react';
import GenerateButton from './components/GenerateButton'
import PasswordBox from './components/PasswordBox'
import copy from 'copy-to-clipboard';
import './styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: "Password"
    }
  }

  componentDidMount = () => {
    this.generatePassword()
  }

  generatePassword = () => {
    let passwordLength = getRandomInteger(10, 16)
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
      let randNum = getRandomInteger(33, 126)
      let asciiChar = String.fromCharCode(randNum)
      password += asciiChar
    }
    this.setState({ password })
  }

  copyHandler = () => {
    copy(this.state.password)
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="title">Password Generator</div>
          <PasswordBox value={this.state.password} copyHandler={this.copyHandler} />
          <GenerateButton generatePassword={this.generatePassword} />
        </div>
      </div>
    );
  }
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default App;
