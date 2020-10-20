import React, { Component } from 'react'
import {startPostLogin} from '../../actions/loginAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Card } from 'antd';
import logo from '../../assets/log.png'
import './Login.css'

class Login extends Component {
constructor(){
    super()
    this.state={
        email:'',
        password:'' ,
        isSubmit : false
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name] : e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault()
    const logindata = {
        email : this.state.email,
        password : this.state.password
    }
    ////console.log(logindata);
    if(logindata.email.length > 0 && logindata.password.length > 0){
        const redirect = () =>{
            return this.props.history.push('/home')
        }
        this.props.dispatch(startPostLogin(logindata,redirect))
        this.setState({email:'' , password:'' , isSubmit : false})
    }
    else {
        this.setState({ isSubmit : true })
    }
    //redirect

 }
render() {
    return (
            <div className="login-main">
             <div className="login-container">
                <ion-icon class='icon-book' name="book"><img src={logo} /></ion-icon>   
                <h2 className="login-heading">Sign in to Ilkal Sarees</h2>
                    <div className="login-group">
                        <Card className="login-card" style={{border: '1px solid #d8dee2'}}>
                            <form onSubmit={this.handleSubmit}>
                                <label className="group-label" htmlFor="email">Email*</label><br /> 
                                <input  
                                    className="group-input" 
                                    type="text" 
                                    id="email" 
                                    placeholder="Enter Email" 
                                    name="email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange} 
                                    required 
                                 />
                                 <p className='p-tag' style={{color : 'red'}}> {( this.state.isSubmit && this.state.email.length === 0 ) ? '*Email is Required' : ''} </p>

                                 <label className="group-label" htmlFor="password">Password*</label><br />
                                <input 
                                    className="group-input" 
                                    type="password" 
                                    id="password" 
                                    placeholder="Password" 
                                    name="password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange} 
                                    required={true} 
                                />
                                <p className='p-tag' style={{color : 'red'}}> {( this.state.isSubmit && this.state.password.length === 0 ) ? '*Password is Required' : ''} </p>
                                { this.props.login.errors && (<p className='p-tag' style={{color : 'red'}}>*{this.props.login.errors}</p>) }

                                <Button block size="medium" id="green-button" type="primary" htmltype="submit" onClick={this.handleSubmit}> Sign in </Button>         
                            </form>
                        </Card>
                    </div>            
                    <div className="login-subcard-group">
                        
                        <Card className="login-subcard" style={{border: '1px solid #d8dee2', paddingBottom: '20px', textAlign: 'center'}}>
                            <p>New to FreshBills? <Link to="/register">Create an account.</Link></p>
                            {/*   <p><Link to='/newform'>New Form</Link></p> */}
                        </Card>
                    </div>
                    </div>               
                 </div>
    )
}
}
const mapStateToProps = (state) =>{
    return {
        login : state.login
    }
}
export default connect(mapStateToProps)(Login)