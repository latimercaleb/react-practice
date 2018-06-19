// Namespaces example
import React from 'react'
// Declare data
const m1 = "I am the first child in the namespace"
const m2 = "I am the second child in the namespace"

// Implement class Component
class A extends React.Component{
      render(){
            return(
                  <p>{m1}</p>
            )
      }
}

// Implement functional Component
class B extends React.Component{
      render(){
            return(
                  <p>{m2}</p>
            )
      }
}

class Wrapper extends React.Component{
      render(){
            return (
                  <div>
                        <A />
                        <B />
                  </div>
            )
      }
}

export default Wrapper;
