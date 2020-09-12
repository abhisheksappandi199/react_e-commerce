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
           role :'customer'
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
        this.setState({username:'',email:'',password:"",businessname:'',address:''})
        //redirect
        const redirect = () =>{
            return this.props.history.push('/')
        }
        this.props.dispatch(startpostRegister(registerdata , redirect))
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
                /><br/>
                { 
                    this.props.register.errors && 
                    this.props.register.errors.username && (<small style={{color : 'red'}}>*{this.props.register.errors.username.message}</small>)
                } <br/>

                <label className="register-group-label" htmlFor="mobile">mobile*</label>
                <Input
                type='text'
                name='mobile'
                placeholder='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
                /><br/>
                { 
                    this.props.register.errors && this.props.register.errors.mobile &&
                    (<small style={{color : 'red'}}>*{this.props.register.errors.mobile.message}</small>)
                }<br/>

                <label className="register-group-label" htmlFor="email">email*</label>
                <Input
                type='text'
                name='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.handleChange}
                /><br/>
                { 
                    this.props.register.errors && this.props.register.errors.email && 
                    (<small style={{color : 'red'}}>*{this.props.register.errors.email.message}</small>) 
                }<br/>

                <label className="register-group-label" htmlFor="password">password*</label>    
                <Input
                type='password'
                name='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handleChange}
                /><br/>
                { 
                    this.props.register.errors && this.props.register.errors.password &&
                    (<small style={{color : 'red'}}>*{this.props.register.errors.password.message}</small>)
                }<br/>

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