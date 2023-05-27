import React, { Component } from "react";
import Input from "@/pages/pages/Input";
import Form from "../Form";

class BookComponentChild extends Component{
  componentDidMount(){
    this.props.returnV('Weight: 0KG')
  }
  render(){
    const onChange=(e)=>{
      this.props.returnV(`Weight: ${e.target.value}KG`)
    }
    return(
      <div ref={this.props.myRef} id="Book">
        {'Weight (KG) '}
        <Input id='Book' type='number' placeholder="#weight" onChange={onChange} defaultValue={0}/>
      </div>
    )
  }
}

export default BookComponentChild