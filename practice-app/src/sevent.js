/*
      Simple bound events using state
*/

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
const componentStyle = {
      'backgroundColor': '#F5F5F5',

}
const paperStyle = {
      'fontWeight': 'bold',
      'fontStyle': 'italic'
}
export default class EventSim extends React.Component{
      constructor(){
            super()
            this.state = {
                  count:0,
                  input:''
            }
      }
      clicked = () => {
            this.setState((oldState)=>{
                  return{
                        count: ++oldState.count,
                        input: oldState.input
                  }
            })
      }

      changed = (e) => {
            let newText = e.currentTarget.value
            this.setState((oldState)=>{

                  return{
                        count: oldState.count,
                        input: newText
                  }
            })
      }

      render(){
            return(
                  <div style={componentStyle}>
                  <h2>Input handler practice</h2>
                  <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                              <Paper style={paperStyle}>
                                    <p>{this.state.count}</p>
                                    <button onClick={this.clicked}>Click to up count</button>
                              </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                              <Paper style={paperStyle}>
                                    <p>{this.state.input}</p>
                                    <input type='text'
                                                placeholder='Typing makes a paragraph...'
                                                onChange={this.changed} />
                              </Paper>
                        </Grid>
                  </Grid>
                  </div>
            )
      }
}
