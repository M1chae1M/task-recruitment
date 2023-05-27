import React, { Component } from "react";
import Input from "@/pages/pages/Input";
import Form from "../Form";

class DVDcomponentChild extends Component{
  componentDidMount(){
    this.props.returnV('Size: 0MB')
  }
  render(){
    const onChange=(e)=>{
      this.props.returnV(`Size: ${e.target.value}MB`)
    }
    return(
      <div ref={this.props.myRef} id="DVD">
        {'Size (MB) '}
        <Input id='size' type='number' placeholder="#size" onChange={onChange} defaultValue={0}/>
      </div>
    )
  }
}
// const WithF=<Form txt='#DVD' detail='Please provide size in MB'><DCC/></Form>;

export default DVDcomponentChild
// export default WithF
