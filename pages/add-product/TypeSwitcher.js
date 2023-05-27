import React, { Component } from "react";

export default class TypeSwitcher extends Component{
  render(){
    const {productType,changeSwitch,keys}=this.props;
    const styles={
      input:{
        border:'solid black 2px',
        margin:'13px 0px',
      },
    }
    return(
      <div>
        {'Type Switcher '}
        <select id='productType' value={productType} onChange={changeSwitch} style={styles.input}>
          {keys?.map(x=><option key={x} value={x}>{x}</option>)}
        </select>
      </div>
    )
  }
}