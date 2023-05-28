import { Component } from 'react';

export default class Header extends Component {
  render() {
    const {txt,children}=this.props;
    const styles={
      Header:{
        borderBottom:'solid black 2px',
        marginBottom:'5px',
        padding:'5px',
        paddingTop:'25px',
        display:'grid',
        gridAutoFlow:'column',
        justifyContent:'space-between',
        fontWeight:'bold',
        fontSize:'1.2rem',
      },
    }
    return (
      <div style={styles.Header}>
        <div>{txt}</div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}
