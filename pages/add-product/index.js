import React, { Component } from 'react';
import Button from '../pages/header/Button';
import Header from '../pages/header/Header';
import UniversalDataInputs from './forms/UniversalDataInputs';
import TypeSwitcher from './TypeSwitcher';
import FCC from './forms/switchingForms/FurnitureComponentChild';
import BCC from './forms/switchingForms/BookComponentChild';
import DCC from './forms/switchingForms/DVDcomponentChild';
import Form from './forms/Form';
import Link from 'next/link';
import MainHOC from '../MainHOC';

export const Store=React.createContext();

const myRef=React.createRef();

const allRefs={
  skuRef:React.createRef(),
  name:React.createRef(),
  price:React.createRef()
}

class AddProduct extends Component{
  state={
    productType:'DVD',
    specValue:'',
    msg:'',
    sku_input:'',
  }
  componentDidMount(){
    const types=this.renderForms()
    const keys=Object.keys(types)

    this.setState({sku_input:types[this.state.productType].sku})
  }

  renderForms(){
    const DVDform=<Form txt='#DVD' detail='Please provide size in MB'><DCC/></Form>;
    const BookForm=<Form txt='#Book' detail='Please provide weight in KG'><BCC/></Form>;
    const FurnitureForm=<Form txt='#Furniture' detail='Please provide dimensions in HxWxL format'><FCC/></Form>;
    
    return{
      'DVD':{
        form:DVDform,
        sku:'DV',
      },
      'Furniture':{
        form:FurnitureForm,
        sku:'FU',
      },
      'Book':{
        form:BookForm,
        sku:'BK',
      },
    }
  }

  render(){
    const {productType,specValue,msg,sku_input}=this.state;
    const types=this.renderForms()
    const keys=Object.keys(types)

    const SelectedForm=types[productType].form
    const changeSwitch=(e)=>{
      this.setState({productType:e.target.value},()=>{
        changeSKU()
      })
    }
    const onSubmit=(e)=>{
      e.preventDefault()
      const SKU=allRefs?.skuRef?.current?.value||''
      const name=allRefs?.name?.current?.value||''
      const price=Number(allRefs?.price?.current?.value||0)?.toFixed(2)
      const data={SKU,name,price,specValue}
      if(SKU!=='' && name!=='' && price>0){
        fetch(`${process.env.NEXT_PUBLIC_API_URL}products/ADD/`, {
          method:'POST',
          body:JSON.stringify({data})
        })
        .then(res=>res.json())
        .then(res=>{
          if(res?.msg==='') window.location="/"
          else this.setState({msg:res.msg})
        })
        .catch(err=>console.log('There was an issue while trying to add a new product. Please try again later.'))
      }
      else{
        this.setState({msg:'Complete all fields!'})
      }
    }
    const returnV=(newState)=>{
      this.setState({specValue:newState})
    }
    const changeSKU=(e)=>{
      // const {value}=e?.target??'';
      // const {productType}=this.state;
      // const val_slc=value?.slice(0,2);
      // const type_sku=types[productType].sku;

      // if(val_slc!==type_sku) this.setState({sku_input:type_sku})
      // else this.setState({sku_input:value})


      const {value}=e?.target??'';
      // const {productType}=this.state;
      // const val_slc=value?.slice(0,2);
      // const type_sku=types[productType].sku;

      // if(val_slc!==type_sku) this.setState({sku_input:type_sku})
      // else this.setState({sku_input:value})
      this.setState({sku_input:value})
    }
    return(
      <Store.Provider value={{myRef,returnV}}>
        <form id='product_form' onSubmit={onSubmit}>
          <Header txt='Product Add'>
            <Button value='Save' type='submit'/>
            <Link href='/'>
              <Button value='Cancel'/>
            </Link>
          </Header>
          <UniversalDataInputs sku_input={sku_input} changeSKU={changeSKU} msg={msg} allRefs={allRefs}/>
          <TypeSwitcher productType={productType} changeSwitch={changeSwitch} keys={keys}/>
          {SelectedForm}
        </form>
      </Store.Provider>
    )
  }
}

export default MainHOC(AddProduct)