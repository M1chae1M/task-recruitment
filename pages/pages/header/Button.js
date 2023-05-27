import { Component } from 'react';

export default class Button extends Component {
  render() {
    const {type}=this.props;
    const styles={
      button:{
        border:'solid black 1px',
        borderRight:'solid black 3px',
        borderBottom:'solid black 3px',
        margin:'3px',
        background:'white',
        padding:'3px',
      },
    }
    return <input type={type?type:'button'} style={styles.button} {...this.props}/>
  }
}