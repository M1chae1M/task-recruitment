import { Component } from 'react';
import Button from './header/Button';
import Footer from './Footer';
import Header from './header/Header';
import ProductList from './productList/ProductList';
import Link from 'next/link';
import MainHOC from './MainHOC';

class App extends Component{
  state={
    products:[],
    msg:'',
  }
  componentDidMount(){
    fetch(`${process.env.NEXT_PUBLIC_API_URL}products/`,{
      cache:'force-cache'
    })
    .then(res=>res.json())
    .then(res=>this.setState({products:res}))
    .catch(err=>this.setState({msg:'Unable to connect to the database. We apologize!'}))
  }
  render(){
    const {products,msg}=this.state;
    const massDelete=(e)=>{
      const checkboxes=boxesChecked(document.querySelectorAll('.delete-checkbox'))

      if(checkboxes.length>0){
        const sorted=withoutDeleted(products,checkboxes);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}products/DELETE/`, {
          // method DELETE didn't work on 000webhost
          // method:'DELETE',
          cache:'force-cache',
          method:'POST',
          body:JSON.stringify({checkboxes})
        })
        .then(this.setState({products:sorted}))
      }
    }
    return(
      <>
        <Header txt='Product List'>
          <Link href="/add-product">
            <Button value='ADD'/>
          </Link>
          <Button value='MASS DELETE' onClick={massDelete}/>
        </Header>
        <ProductList products={products} msg={msg}/>
        <Footer/>
      </>
    )
  }
}

function boxesChecked(boxes){
  return Array
    .from(boxes)
    .filter(x=>x.checked)
    .map(x=>{return x.id})
}

function withoutDeleted(products,checkboxes){
  return products
    .filter(x=>!checkboxes
    .includes(x.SKU))
    .sort((a, b)=>{
      if(a.sku<b.sku) return -1;
      else if(a.sku>b.sku) return 1;
      return 0;
    })
}

export default MainHOC(App)