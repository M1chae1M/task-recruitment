import React, { Component } from 'react';
import Input from '@/pages/Input';

const dimensions=['Height','Width','Length']

export default class FurnitureComponentChild extends Component{
  componentDidMount(){
    this.props.returnV('Dimensions:0x0x0')
  }
  render(){
    const onChange=(e)=>{
      const arr=Array.from(this.props.myRef.current.querySelectorAll('.Furniture'))?.map(x=>x.value)
      this.props.returnV(`Dimensions:${arr.join('x')}`)
    }
    return(
      <div ref={this.props.myRef} id='Furniture'>
      {
        dimensions?.map(x=>{
          // const tag=`#${x.toLowerCase()}`
          const tag=`${x.toLowerCase()}`
          return <div key={x} style={{margin:'13px 0px',}}>
            {`${x} (CM) `}
            <Input className='Furniture' type='number' placeholder={tag} onChange={onChange} defaultValue={0} id={tag}/>
          </div>
        })
      }
      </div>
    )
  }
}