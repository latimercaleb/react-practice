/*
  Card component
  Reads data fetched from  parent PropX
  Produces Cards with sylized data
*/
import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';

class Card extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <ul>
      {this.props.data.map(i => {
        return (
          <li key={i}> {i.name}</li>
        )
      })}
    </ul>
    )
  }
}
export default Card
