import React, { Component } from 'react'
import { Row , Col , Card ,Form, Input, InputNumber, Button } from 'antd'
import './addressform.css'

class AddressForm extends Component {
    constructor(){
        super()
        this.state={
           username:'',
           email:'',
           mobile:'',
           password:"",
           role :'customer'
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    render() {
        return (
            <div className="addressform-align-div">
                <h3>Enter the Address Details</h3>
                <Card className="addressform-card" style={{border: '1px solid #d8dee2'}}>
                <form onSubmit={this.handleSubmit}>

                <label className="addressform-group-label" htmlFor="username">Name*</label>
                <Input 
                type='text'
                name='username'
                placeholder='name'
                value={this.state.username}
                onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="mobile">mobile*</label>
                <Input
                type='text'
                name='mobile'
                placeholder='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="email">email*</label>
                <Input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="password">password*</label>    
                <Input
                type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handleChange}
                /><br/>

                <Button block size="medium" id="green-button" type="primary" htmltype="submit" onClick={this.handleSubmit}> addressform </Button>
                </form>
                </Card>
            </div>
        )
    }
}
export default AddressForm