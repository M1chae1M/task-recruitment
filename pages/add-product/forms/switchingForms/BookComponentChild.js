import React, { Component } from "react";
import Input from "@/pages/Input";

export default class BookComponentChild extends Component{
  componentDidMount(){
    this.props.returnV(0)
    // this.props.returnV('Weight: 0KG')
  }
  render(){
    const onChange=(e)=>{
      this.props.returnV(e.target.value)
      // this.props.returnV(`Weight: ${e.target.value}KG`)
    }
    return(
      <div ref={this.props.myRef} id="Book">
        {'Weight (KG) '}
        <Input id='weight' type='number' placeholder="#weight" onChange={onChange} defaultValue={0}/>
      </div>
    )
  }
}