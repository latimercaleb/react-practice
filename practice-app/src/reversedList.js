/*
  List component
  Pulls data from local db by Fetch API
  Sorts Data before  render
  Reverses order of that data on event trigger
  Utilizes material ui components
  Utilizes custom styling
*/

import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import SortIcon from '@material-ui/icons/Sort'

import './App.css'

const listStyles = {
      border: '1px groove black',
      'backgroundColor': '#E2F1FF',
      'borderRadius': '5px',
      'margin': '15px'
}

class ReversedListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      list:[]
    }
  }
  reverse = (e) => {
    this.setState(curr =>{
      return {list: curr.list.reverse()}
    })
  }
  componentWillMount(){
    // Made simple endpoint with json-server package in db.json
    let url = '/users'
    fetch(url)
    .then((res)=>{ // Note that this a response object, need to look more into promises, fetch api and response object in javascript
      // console.log(`The response is ${res}`)
      return res.json()
    })
    .then(data => {
      //console.log(`The data is ${data}`)
      this.setState({list:data.sort((a,b) => a.name > b.name ? 1:0)})
    })
    .catch(err=>{
      console.log(`The error is ${err}`)
    })
  }

  render(){
    return (
      <List style={listStyles}>
        <Button variant="fab"
                color="primary"
                className="sort-btn"
                onClick={this.reverse}>
          <SortIcon/>
        </Button>
        {this.state.list.map(obj =>(
            <ListItem key={obj.id}
                      divider>
                <Avatar className="avatar-bg">
                  {obj.name.charAt(0)}
                </Avatar>
                <ListItemText inset
                              primary={obj.name}
                              secondary={obj.type}/>
            </ListItem>
        ))}
      </List>
    )
  }

}


export default ReversedListContainer
