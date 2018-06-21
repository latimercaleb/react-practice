/*
  Simple component to read from api and present data
  Propx to get data from api and function as container to Card component
  Card component to present data to UI and leverage material ui
*/
import React, {Component} from 'react'
import Card from './card'
class PropX extends Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  //Lifecycle hook that will grab data right before component is mounted to the dom
  componentWillMount(){
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then((res)=>{ // Note that this a response object, need to look more into promises, fetch api and response object in javascript
      //console.log(`The response is ${res}`)
      return res.json()
    })
    .then(data => {
      //console.log(`The data is ${data}`)
      this.setState({data})
    })
    .catch(err=>{
      console.log(`The error is ${err}`)
    })
  }

  render(){
    return(
      <div>
        <Card data={this.state.data}/>
      </div>
    )
  }
}
export default PropX
