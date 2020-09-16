import React, { Component } from 'react'
import { Button } from 'antd'
import {searchproduct} from '../../actions/searchAction'
import {connect} from 'react-redux'
import './productfilter.css'

class ProductFilter extends Component {
    handlePriceChange = (min , max) => {
        let obj = {}
        obj.minprice = min
        obj.maxprice = max
        this.props.dispatch(searchproduct(obj))
    }
    handleColorChange = (color) => {
        if(color){
            let obj = {}
            obj.color = color
            this.props.dispatch(searchproduct(obj))
        } else {
            this.props.dispatch(searchproduct({'none':'1'}))
        }

    }
    handleSortChange = (sort) => {
        let obj = {}
        obj.sort = sort
        this.props.dispatch(searchproduct(obj))
    }
    render() {
        return (
            <div className='space'>
            <div>
                <b><big>Sort by :</big></b><hr/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handleSortChange('featured')}}>Featured</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handleSortChange('lowtohigh')}}>Low to High</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handleSortChange('hightolow')}}>High to Low</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handleSortChange('new')}}>Newest Arrivals</Button><br/>
            </div><br/>
            <div>
                <b><big>Price :</big></b><hr/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(1 ,100000)}}>All</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(1 ,1000)}}>{`< ₹1,000`}</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(1000 ,2000)}}>{`₹1,000 - ₹2,000`}</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(2000 ,3000)}}>{`₹2,000 - ₹3,000`}</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(3000 ,5000)}}>{`₹3,000 - ₹5,000`}</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(5000 ,10000)}}>{`₹5,000 - ₹10,000`}</Button><br/>
                <Button type='text' size='small' type="dashed"  onClick={()=>{this.handlePriceChange(10000 ,99999)}}>{`> ₹10,000`}</Button><br/>
            </div><br/>
            <div>
                <b><big>Color :</big></b><hr/>
                <Button size='small' onClick={()=>{this.handleColorChange()}}><b>Clear</b></Button><br/>
                <Button id='color-red-button' onClick={()=>{this.handleColorChange('red')}}>.</Button>
                <Button id='color-green-button' onClick={()=>{this.handleColorChange('green')}}>.</Button>
                <Button id='color-black-button' onClick={()=>{this.handleColorChange('black')}}>.</Button>
                <Button id='color-yellow-button' onClick={()=>{this.handleColorChange('yellow')}}>.</Button>
                <Button id='color-brown-button' onClick={()=>{this.handleColorChange('brown')}}>.</Button>
                <Button id='color-pink-button' onClick={()=>{this.handleColorChange('pink')}}>.</Button>
                <Button id='color-blue-button' onClick={()=>{this.handleColorChange('blue')}}>.</Button>
                
            </div>
            </div>
        )
    }
}
export default connect()(ProductFilter)