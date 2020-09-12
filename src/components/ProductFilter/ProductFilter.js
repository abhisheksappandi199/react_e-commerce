import React, { Component } from 'react'
import { Button , Tooltip } from 'antd'
import './productfilter.css'

class ProductFilter extends Component {
    render() {
        return (
            <div className='space'>
                <div>
                    <b><big>Price :</big></b><hr/>
                    <Button type='text'>All</Button><br/>
                    <Button type='text'>{`< ₹1,000`}</Button>
                    <Button type='text'>{`₹1,000 - ₹2,000`}</Button>
                    <Button type='text'>{`₹2,000 - ₹3,000`}</Button>
                    <Button type='text'>{`₹3,000 - ₹4,000`}</Button>
                    <Button type='text'>{`₹4,000 - ₹5,000`}</Button>
                    <Button type='text'>{`> ₹5,000`}</Button>
                </div><br/>
                <div>
                    <b><big>Color :</big></b><hr/>
                    <form className='color-space'>
                    <input type='radio'/><label> red</label> <br/>
                    <input type='radio'/><label>green</label> <br/>
                    <input type='radio'/><label>black</label> <br/>
                    <input type='radio'/><label>yellow</label> <br/>
                    <input type='radio'/><label>brown</label> <br/>
                    <input type='radio'/><label>pink</label> <br/>
                    <input type='radio'/><label>blue</label> <br/>
                    </form>
                </div>
            </div>
        )
    }
}
export default ProductFilter