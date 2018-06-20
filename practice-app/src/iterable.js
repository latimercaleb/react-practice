// Mapping over arrays and objects
import React from 'react'
const foo = ["Alpha", "Beta", "Delta"]
const baz = {
      1: "Tacos",
      2: "Shawarmas",
      3: "Shakes"
}

class Iterable extends React.Component{
      render(){
            return(
                  <div>
                        <h2>Mapping over an array</h2>
                        <ul>
                              {foo.map(item=>{
                                    return <li key={item} className='good-list'>{item}</li>
                              })}
                        </ul>
                        <h2>Versus mapping over a collection</h2>
                        <ul>
                        {Object.keys(baz).map(i=>{
                              return <li key={i} className='good-list'>{baz[i]}</li>
                        })}
                        </ul>
                  </div>
            )
      }
}

export default Iterable
