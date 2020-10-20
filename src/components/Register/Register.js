import React, { Component } from 'react'
import { Row , Col , Card ,Form, Input, InputNumber, Button } from 'antd'
import { startpostRegister } from '../../actions/registerAction'
import { connect } from 'react-redux'
import './register.css'

class Register extends Component {
    constructor(){
        super()
        this.state={
           username:'',
           email:'',
           mobile:'',
           password:"",
           role :'customer',
           isSubmit : false
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submitted');
        const registerdata = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            mobile : this.state.mobile,
            role : this.state.role
        }
        console.log(registerdata);
        
        if(registerdata.username.length > 0 && registerdata.email.includes('@') && registerdata.email.length > 0&& registerdata.password.length > 8 && registerdata.mobile.length == 10){
            const redirect = () =>{
                return this.props.history.push('/')
            }
            this.props.dispatch(startpostRegister(registerdata , redirect))
            this.setState({username:'',email:'',password:"",mobile:'' , isSubmit : false})
        }
        else {
            this.setState({ isSubmit : true })
        }
        //redirect

        //this.props.dispatch(startpostRegister(registerdata , this.props))
    }

    render() {
        return (
        <div className='register-div'>
        <Row>
            <Col span={18}>col</Col>
            <Col span={6}>
                <div className="register-align-div">
                <Card className="register-card" style={{border: '1px solid #d8dee2'}}>
                <form onSubmit={this.handleSubmit}>

                <label className="register-group-label" htmlFor="username">UserName*</label>
                <Input 
                type='text'
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                />
                <p style={{color : 'red'}}> {( this.state.isSubmit && this.state.username.length === 0 ) ? '*Name is Required' : ''} </p>
                

                <label className="register-group-label" htmlFor="mobile">mobile*</label>
                <Input
                type='text'
                name='mobile'
                placeholder='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
                />
                <p className='p-tag' style={{color : 'red'}}> {( this.state.isSubmit && this.state.mobile.length === 0 ) ? '*mobile is Required' : ''} </p>
                <p className='p-tag' style={{color : 'red'}}> {( (this.state.isSubmit && this.state.mobile.length > 0)  && (this.state.mobile.length < 10 || this.state.mobile.length > 10) ) ? '*mobile number is Invalid' : ''} </p><br/>


                <label className="register-group-label" htmlFor="email">email*</label>
                <Input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
                />
                <p style={{color : 'red'}}> {( this.state.isSubmit && this.state.email.length === 0 ) ? '*Email is Required' : ''} </p>
                <p className='p-tag' style={{color : 'red'}}> {( (this.state.isSubmit && this.state.email.length > 0)  && (!this.state.email.includes('@')) ) ? '*email number is Invalid' : ''} </p><br/>

                <label className="register-group-label" htmlFor="password">password*</label>    
                <Input
                type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handleChange}
                />               
                 <p style={{color : 'red'}}> {( this.state.isSubmit && this.state.password.length === 0 ) ? '*Password is Required' : ''} </p>
                 <p style={{color : 'red'}}> {( (this.state.isSubmit && this.state.password.length > 0)  && (this.state.password.length < 8 || this.state.password.length > 128) ) ? '*Password must have min 8 character' : ''} </p><br/>

                <Button block size="medium" id="green-button" type="primary" htmltype="submit" onClick={this.handleSubmit}> Register </Button>
                </form>
                </Card>
                </div>
            </Col>
        </Row>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        register : state.register
    }
}
export default connect(mapStateToProps)(Register)