import React, { Component } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { translate } from 'moji-translate'
import './App.css'

class App extends Component {
  state = {
    // text: 'Qualquer um texto aqui aqui...'
    text: '',
    copied: false
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return <div className="App">
        <h1>
          <span role="img" aria-label="high voltage">
            ⚡️
          </span> We translate your text to emoji <span role="img" aria-label="hands down">
            👇
          </span>
        </h1>

        <textarea className="Textarea" type="text" placeholder="#typeSomething🧙‍" onChange={e => this.handleChange(e)} autoFocus />

        {this.state.text && 
          <CopyToClipboard text={translate(this.state.text)} onCopy={() => this.setState({ copied: true })}>
            <pre className="Result">
              {translate(this.state.text)}
            </pre>
          </CopyToClipboard>
        }

        {this.state.copied ? <span style={{ color: "red" }}>
            Copied.
          </span> : null}
      </div>;
  }
}

export default App;
