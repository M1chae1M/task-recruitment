import { Component } from 'react';

export default class Element extends Component{
  render(){
    const {data}=this.props??{};
    const {SKU,name,specValue}=data||'';
    const price=Number(data?.price||0)?.toFixed(2);
    const styles={
      Element:{
        border:'solid black 1px',
        textAlign:'center',
        display:'grid',
        alignContent:'center',
        position:'relative',
      },
      checkbox:{
        position:'absolute',
        top:'6px',
        left:'6px',
      }
    }
    return(
      <div style={styles.Element} className='element'>
        <input type='checkbox' style={styles.checkbox} className='delete-checkbox' id={SKU}/>
        <div>{SKU}</div>
        <div>{name}</div>
        <div>{price} $</div>
        <div>{specValue}</div>
      </div>
    )
  }
}
