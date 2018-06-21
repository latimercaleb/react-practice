/*
  Card component
  Reads data fetched from  parent PropX
  Produces Cards with sylized data
*/
import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Card extends Component{
  render(){
    return(
          <List className='the-list-component' dense>
            {this.props.data.map(dataItem => {
                  return (
                        <ListItem key={dataItem.id}>
                              <ListItemText primary={dataItem.name}
                                                    secondary={dataItem.company.name}/>
                        </ListItem>
                  )
            })}
          </List>
    )
  }
}
export default Card
