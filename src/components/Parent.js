import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(){
        super()
        this.state = { isLoggedIn : false}

        this.helloParent = this.helloParent.bind(this)
          
    }

    helloParent(d){
        alert("Welcome  dude " + d )
    }

  render() {

    return this.state.isLoggedIn ? (<div> <h1> Welcome Ansari</h1></div>) : (<div> <h1> Welcome User</h1></div>)

    // if(this.state.isLoggedIn){

    //     return (
    //         <div> <h1> Welcome Ansari</h1></div>
    //     ) 
    // }
    //     else{
    //         return(
    //             <div> <h1> Welcome User</h1></div>
    //         )
    //     }

    // }
    // return (

       
    // //   <div>Parent

    // //     <Child helloParent = {this.helloParent}></Child>
    // //   </div>

    // )
  }
}

export default Parent