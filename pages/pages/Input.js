import React, { Component } from "react";

export default class Input extends Component{
  render(){
    const {type,myref}=this.props;
    const styles={
      input:{
        border:'solid black 2px',
        padding:'3px',
      },
    }
    return <input ref={myref} type={type!==''?type:'text'} style={styles.input} {...this.props} required/>
  }
}