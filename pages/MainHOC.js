import React, { Component } from 'react';

const MainHOC=(WrappedComponent)=>{
  return class EnhancedComponent extends Component {
    render() {
      const styles={
        App:{
          display:'grid',
          height:'100vh',
          width:'98.5vw',
          alignContent:'space-between',
          gridTemplateRows:'auto 1fr auto',
        },
      };
      return(
        <div className='App' style={styles.App}>
          <WrappedComponent {...this.props}/>
        </div>
      );
    }
  }
};

export default MainHOC;
