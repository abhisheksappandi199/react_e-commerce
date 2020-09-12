import React, { Component } from 'react'
import {startAdminPostLogin} from '../../actions/adminAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Card } from 'antd';
import './admin.css'

class Admin extends Component {
constructor(){
    super()
    this.state={
        email:'',
        password:'',
        admincode:''
    }
}
handleChange=(e)=>{
    this.setState({[e.target.name] : e.target.value})
}
handleSubmit=(e)=>{
    e.preventDefault()
    const logindata = {
        email : this.state.email,
        password : this.state.password,
        admincode : this.state.admincode
    }
    console.log(logindata);
    this.setState({email:'' , password:''})
    //redirect
    const redirect = () =>{
        return this.props.history.push('/owner')
    }
    this.props.dispatch(startAdminPostLogin(logindata,redirect))
 }
render() {
    return (
            <div className="admin-login-main">
             <div className="admin-login-container">  
                <h2 className="admin-login-heading"><b>Admin </b> Sign in </h2>
                    <div className="login-group">
                        <Card className="admin-login-card" style={{border: '1px solid #d8dee2'}}>
                            <form onSubmit={this.handleSubmit}>
                                <label className="admin-group-label" htmlFor="email">Email*</label><br /> 
                                <input  
                                 className="admin-group-input" 
                                 type="text" 
                                 id="email" 
                                 placeholder="Enter Email" 
                                 name="email" 
                                 value={this.state.username} 
                                 onChange={this.handleChange} 
                                 required 
                                 />
                                 <br />
                                 <label className="admin-group-label" htmlFor="password">Password*</label><br />
                                <input className="admin-group-input" type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required={true} />

                                <label className="admin-group-label" htmlFor="admincode">admincode*</label><br />
                                <input className="admin-group-input" type="text" id="admincode" placeholder="admincode" name="admincode" value={this.state.admincode} onChange={this.handleChange} required={true} />
                                
                                <Button block size="medium" id="brown-button" type="primary" htmltype="submit" onClick={this.handleSubmit}>Admin Sign in </Button>         
                            </form>
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
export default connect(mapStateToProps)(Admin)