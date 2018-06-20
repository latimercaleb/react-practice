// Component to practice simple state mgmt
import React from 'react'

class Stateful extends React.Component{
  constructor(props){
    super(props)
  this.state = {
    flag: true,
    text: "I am simple text",
    btnText: "Once clicked, becomes disabled",
    disabled: false
  }
  this.theClick = this.theClick.bind(this)
}
theClick(){
  this.setState(prevState => {
    return {
    flag: !prevState.flag,
    text: prevState.text.toUpperCase(),
    btnText: "Now disabled",
    disabled: true
  }
})
}

  render() {
    return(
      <div>
        <h2>Small State example</h2>
        <p>{this.state.text}</p>
        <button onClick={this.theClick} disabled={this.state.disabled}>{this.state.btnText}</button>
      </div>
    )
  }
}

export default Stateful
