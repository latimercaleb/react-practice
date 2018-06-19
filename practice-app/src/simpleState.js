// Component to practice simple state mgmt
import React from 'react'

class Stateful extends React.Component{
  this.state = {
    flag: true,
    text: "I am simple text"
  }
  render: () => {
    return(
      <div>
        <p>{this.state.text}</p>
        <button onClick={!this.state.flag}>Click to change state</button>
      </div>
    )
  }
}
