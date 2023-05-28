import { Component } from 'react';

export default class Footer extends Component{
  render(){
    const styles={
      Footer:{
        borderTop:'solid black 2px',
        padding:'15px',
        textAlign:'center',
      },
    }
    return <div style={styles.Footer}>Scandiweb Test assignment</div>
  }
}