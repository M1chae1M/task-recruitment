import React, { Component } from "react";
import Input from "@/pages/Input";

export default class DVDcomponentChild extends Component{
  componentDidMount(){
    // this.props.returnV('Size: 0MB')
    this.props.returnV(0)
  }
  render(){
    const onChange=(e)=>{
      // this.props.returnV(`Size: ${e.target.value}MB`)
      this.props.returnV(e.target.value)
    }
    return(
      <div ref={this.props.myRef} id="DVD">
        {'Size (MB) '}
        <Input id='size' type='number' placeholder="#size" onChange={onChange} defaultValue={0}/>
      </div>
    )
  }
}