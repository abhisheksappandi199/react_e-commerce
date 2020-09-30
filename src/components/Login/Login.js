import React, { Component } from 'react'
import {startPostLogin} from '../../actions/loginAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Card } from 'antd';
import './Login.css'

class Login extends Component {
constructor(){
    super()
    this.state={
        email:'',
        password:''
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
    console.log(logindata);
    this.setState({email:'' , password:''})
    //redirect
    const redirect = () =>{
        return this.props.history.push('/home')
    }
    this.props.dispatch(startPostLogin(logindata,redirect))
 }
render() {
    return (
            <div className="login-main">{console.log("login props",this.props)}
             <div className="login-container">
                <ion-icon class='icon-book' name="book"></ion-icon>   
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
                                 value={this.state.username} 
                                 onChange={this.handleChange} 
                                 required 
                                 />
                                 <br />
                                 <label className="group-label" htmlFor="password">Password*</label><br />
                                <input className="group-input" type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required={true} />
                                
                                <Button block size="medium" id="green-button" type="primary" htmltype="submit" onClick={this.handleSubmit}> Sign in </Button>         
                            </form>
                        </Card>
                    </div>            
                    <div className="login-subcard-group">
                        { this.props.login.errors && (<small style={{color : 'red'}}>*{this.props.login.errors}</small>) }
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