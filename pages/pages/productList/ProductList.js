import { Component } from 'react';
import Element from './Element';

export default class ProductList extends Component {
  render() {
    const {products,msg}=this.props;
    const styles={
      ProductList:{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(200px, 200px))',
        gridTemplateRows:'repeat(auto-fit, minmax(120px, 120px))',
        gridAutoRows:'120px',
        justifyContent:'space-evenly',
        gridGap:'10px',
        padding:'10px',
        overflowY:'scroll',
        position:'relative',
      },
      message:{
        width:'100%',
        height:'100%',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        position:'absolute',
      },
    }
    return(
      <div style={styles.ProductList}>
        {
          products?.length>0?
            products?.map(x=><Element key={x.SKU} data={x}/>):
              <div style={styles.message}>{msg}</div>
        }
      </div>
    )
  }
}
