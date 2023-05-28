import React, { Component } from "react";
import {Store} from '../index';

export default class Form extends Component{
  render(){
    const {txt,detail,children}=this.props;
    const styles={
      form:{
        border:'solid black 2px',
        padding:'10px',
        width:'fit-content',
      },
      label:{
        margin:'13px 0px',
      },
    }   
    return(
      <Store.Consumer>
      {value=>{
        const {myRef,returnV}=value??{};
        const ChildrenWithProps=React.Children?.map(children, (child)=>{
          return React.cloneElement(child,{
            myRef:myRef,
            returnV:returnV
          })
        })
        return(
          <div style={styles.form} id="product_form">
            <div style={styles.label}>{txt}</div>
            {ChildrenWithProps}
            <div style={styles.label}>{detail}</div>
          </div>
        )
      }}
      </Store.Consumer>
    )
  }
}