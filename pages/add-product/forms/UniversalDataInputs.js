import React, { Component } from 'react';
import Input from '../../pages/Input';

export default class UniversalDataInputs extends Component{
  render(){
    const {sku_input,changeSKU,msg,allRefs}=this.props??{};
    const styles={
      InputLabel:{
        margin:'13px 0px',
        display:'grid',
        gridAutoFlow:'column',
        width:'30%',
        gridTemplateColumns:'30% 1fr',
        justifyContent:'space-between',
        position:'relative',
      },
      msg:{
        color:'red',
        position:'absolute',
        right:'0%',
        transform:'translateX(105%)',
        height:'100%',
        display:'grid',
        alignItems:'center',
      }
    }
    return(
      <>
        <div style={styles.InputLabel}>
          <div>{'SKU '}</div>
          <Input id='sku' placeholder='#sku' value={sku_input} onChange={changeSKU} myref={allRefs?.skuRef}/>
          <div style={styles.msg}>{msg}</div>
        </div>
        <div style={styles.InputLabel}>
          <div>{'Name '}</div>
          <Input id='name' placeholder='#name' myref={allRefs?.name}/>
        </div>
        <div style={styles.InputLabel}>
          <div>{'Price ($) '}</div>
          <Input id='price' type='number' placeholder='#price' step="any" myref={allRefs?.price}/>
        </div>
      </>
    )
  }
}