import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetCart} from '../../actions/cartAction'
import { Row, Col ,Button} from 'antd'
import {Link } from 'react-router-dom'
import CartItems from '../CartItems/CartItems.js'
import UserAddress from '../UserAddress/UserAddress'
import {startGetaddress} from '../../actions/addressAction'

class Cart extends Component {
    componentDidMount(){
        // const id = ( this.props.cart.length === 1 && (this.props.cart[0]._id) )
        // console.log(id);
        // if(id){
            
        //     //localStorage.setItem('cartid',id)
        // }
        this.props.dispatch(startGetCart())
        this.props.dispatch(startGetaddress())
    }
    handleGetBill =() => {
        if(this.props.address.length > 0){
            console.log("checkout");
        }
        else{
            window.alert('Please fill the address')
        }
    }
    render() {
        return (
            <div  style={{ minHeight : '50vh' }}>
                {
                this.props.cart.length == 0 ? <h1 align='center'>Cart is Empty</h1> : (
                  <div>
                    <Row>
                    <Col span={14}>
                        <h1 align='center'>Cart Deatils</h1>
                        <CartItems data={this.props.cart}/>
                    </Col>
                    <Col span={10}>
                        <h1 align='center'>Address Deatils</h1>
                        <UserAddress/><br/>
                        {
                            this.props.address.length > 0 
                            ? 
                            <Button type="primary" style={{ background: "green ", borderColor: "white" }}onClick={this.handleGetBill} >
                                <Link to='/checkout' style={{color:'white'}}>Check Out</Link>
                            </Button> 
                            :
                            <Button type="primary" style={{ background: "green ", borderColor: "white" }} onClick={this.handleGetBill} >Check Out</Button>
                        }
                        
                    </Col>
                    </Row>
                  </div>    
                )
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        cart : state.cart,
        address : state.address
    }
}
export default connect(mapStateToProps)(Cart)