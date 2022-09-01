import React, { Component } from 'react'

export class First extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myMessage : "Sujit",
         count : 0,
         newcount : 0
      }
      this.onChangeState = this.onChangeState.bind(this)
    }

    onChangeState(){
        alert("Name Changed")
        this.setState({myMessage :    "Sujit Managre"} )
    }

   incrementFun(){
    this.setState({count : this.state.count + 1},
        () => {console.log(this.state.count)}
        )
   }

   incrementFive(){
    for(let i=0 ; i<=5 ; i++){
       this.setState({newcount :this.state.newcount + 1})

       
    }
    // this.setState(ps => ({newcount : ps.state.newcount}))

   }

   testFun(){
    alert("tesing func")
   }
  render() {
    return (
      <div>
        <h1> My name is {this.state.myMessage}</h1>
        <button onClick={this.onChangeState}>change state</button>

        <h1> My count is {this.state.count}</h1>
        <button onClick={()=> this.incrementFun()}>Inc Count</button>

        <h1> My count of 5 is {this.state.newcount} </h1>
        <button onClick={()=> this.incrementFive()}>Inc Count by 5 </button> <br></br><br></br><br></br>

        <button onClick={this.testFun}>Testing Fun</button>
      </div>
    )
  }
}

export default First