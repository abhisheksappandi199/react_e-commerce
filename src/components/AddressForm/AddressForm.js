import React, { Component } from 'react'
import { Card , Input, Button } from 'antd'
import {startAddaddress} from '../../actions/addressAction'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import './addressform.css'

class AddressForm extends Component {
    constructor(){
        super()
        this.state={
           username:'',
           landmark:'',
           mobile:'',
           street:"",
            city:"",
            pincode:"",
            states:'',
            addresstype:"",
            alternatemobile:'',
            statearray : [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"]
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleAddressType=(addresstype)=>{
        this.setState({addresstype})
    }
    handlestateChange=(e)=>{
        this.setState({states : e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const addressdata = {
            name : this.state.username,
            mobile: this.state.mobile ,
            alternatemobile : this.state.alternatemobile ,
            street : this.state.street ,
            landmark : this.state.landmark ,
            city : this.state.city ,
            states : this.state.states ,
            pincode : this.state.pincode ,
            addresstype : this.state.addresstype
        }
        console.log(addressdata);
        this.setState({name:'',mobile:'',alternatemobile:'',street:'',landmark:'',city:'',states:'',pincode:'',addresstype:''})
        //redirect
        const redirect = () =>{
            return this.props.history.push('/account/address')
        }
        this.props.dispatch(startAddaddress(addressdata,redirect))
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

                <label className="addressform-group-label" htmlFor="street">street*</label>    
                <Input
                    type='text'
                    name='street'
                    placeholder='street'
                    value={this.state.street}
                    onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="landmark">landmark*</label>
                <Input
                    type='text'
                    name='landmark'
                    placeholder='landmark'
                    value={this.state.landmark}
                    onChange={this.handleChange}
                /><br/>
                
                <label className="addressform-group-label" htmlFor="city">city*</label>
                <Input
                    type='text'
                    name='city'
                    placeholder='city'
                    value={this.state.city}
                    onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="pincode">pincode*</label>
                <Input
                    type='text'
                    name='pincode'
                    placeholder='pincode'
                    value={this.state.pincode}
                    onChange={this.handleChange}
                /><br/>

                <label className="addressform-group-label" htmlFor="states">states</label><br/>
                <select onChange={this.handlestateChange} value={this.state.states}>
                    <option value=''>select</option>
                    {
                        this.state.statearray.map(e => {
                            return (
                                <option value={e} key={e}>{e}</option>
                            )
                        })
                    }
                </select><br/>

                <label className="addressform-group-label" htmlFor="alternatemobile">alternatemobile</label>
                <Input
                    type='text'
                    name='alternatemobile'
                    placeholder='alternatemobile'
                    value={this.state.alternatemobile}
                    onChange={this.handleChange}
                /><br/><br/>

                <label className="addressform-group-label" htmlFor="addresstype">addresstype</label><br/>
                <input 
                    type='radio'
                    name='addresstype'
                    value={this.state.addresstype == 'home'}
                    onChange={()=>{this.handleAddressType('home')}}
                />{" "}Home{" "}
                <input 
                    type='radio'
                    name='addresstype'
                    value={this.state.addresstype == 'work'}
                    onChange={()=>{this.handleAddressType('work')}}
                />{" "}Work{" "}
                <input 
                    type='radio'
                    name='addresstype'
                    value={this.state.addresstype == 'other'}
                    onChange={()=>{this.handleAddressType('other')}}
                />{" "}other{" "}


                <Button block size="medium" id="green-button" type="primary" htmltype="submit" onClick={this.handleSubmit}> addressform </Button>
                </form><br/>
                <Button block size="medium" id="red-button" type="primary" ><Link to='/account/address'>Cancel</Link></Button>
                </Card>
            </div>
        )
    }
}
export default connect()(AddressForm)