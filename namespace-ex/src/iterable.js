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
                        <ul>
                              {foo.map(item=>{
                                    return <li key={item}>{item}</li>
                              })}
                        </ul>
                              {Object.keys(baz).map(i=>{
                                    return <li key={i}>{baz[i]}</li>
                              })}
                        <ul>

                        </ul>
                  </div>
            )
      }
}

export default Iterable
