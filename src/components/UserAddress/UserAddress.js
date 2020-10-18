import React, { Component } from 'react'
import { Card ,Col ,Row ,Modal ,Input ,Button} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetaddress , startUpdateaddress , startRemoveaddress} from '../../actions/addressAction'
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';

class UserAddress extends Component {
    constructor(){
        super()
        this.state = {
            id:'',
            username:'',
            landmark:'',
            mobile:'',
            street:"",
             city:"",
             pincode:"",
             states:'',
             addresstype:"",
             alternatemobile:'',
             isSubmit : false ,
             statearray : [ "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"],
            visible: false,
            confirmLoading: false
        }
    }
    componentDidMount(){
        if(this.props.address.length == 0){
            this.props.dispatch(startGetaddress())
        }
    }
    showModal = (obj) => {
        this.setState({
            id : obj._id ,
            username : obj.name,
            landmark : obj.landmark,
            mobile   : obj.mobile,
            street   : obj.street,
             city    : obj.city,
             pincode : obj.pincode,
             states  : obj.states,
            addresstype  : obj.addresstype,
            alternatemobile  : obj.alternatemobile,
            visible  : true,
        });
      }

      handleOk = (e) => {
        e.preventDefault()
        // setTimeout(() => {
        //     this.setState({
                //visible: false,
        //       confirmLoading: false,
        //     });
        //   }, 400)
        const obj ={
            name : this.state.username,
            landmark : this.state.landmark,
            mobile : this.state.mobile,
            street   : this.state.street,
             city    : this.state.city,
             pincode : this.state.pincode,
             states  : this.state.states,
            addresstype  : this.state.addresstype,
            alternatemobile  : this.state.alternatemobile,
        }
        console.log(obj);
        if(obj.name.length > 0 && obj.landmark.length > 0 && obj.mobile.length === 10 && obj.street.length > 0 && obj.city.length > 0
            && obj.pincode.length > 0 && obj.states.length > 0 && obj.addresstype.length > 0)
            {
                this.props.dispatch(startUpdateaddress(this.state.id , obj))
                this.setState({
                  confirmLoading: false,isSubmit : false, visible: false
                });
            }
            else {
                this.setState({ isSubmit : true , visible: true})
            }
      };
    
      handleCancel = () => {
        this.setState({
          visible: false,
        });
      }
    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }
    handleAddressType=(addresstype)=>{
        this.setState({addresstype})
    }
    handlestateChange=(e)=>{
        this.setState({states : e.target.value})
    }
    handleDelete = (id) => {
        this.props.dispatch(startRemoveaddress(id))
    } //  <DeleteOutlined onClick={()=>{this.handleDelete(e._id)}}/>
    render() {
        const e = ( this.props.address.length > 0 && this.props.address[0] )
        return (
            <div>
                {
                    this.props.address.length == 1 ? (
                        <Card 
                            title={<h3>Address</h3>}
                            style={{ width: 430 }}
                            actions={[ <EditOutlined key="edit" onClick={()=>{this.showModal(e)}}/> ,<DeleteOutlined onClick={()=>{this.handleDelete(e._id)}}/>]} 
                            >
                            <>
                            <b><label>Name   :{' '}</label></b>{e.name}<br/>
                            <b><label>Mobile :{' '}</label></b>{e.mobile}<br/>
                            <b><label>Street :{' '}</label></b><p>{e.street}</p><br/>
                            <b><label>Landmark :{' '}</label></b>{e.landmark}<br/>
                            <b><label>City :{' '}</label></b>{e.city}<br/>
                            <b><label>State :{' '}</label></b>{e.states}<br/>
                            <b><label>Pincode :{' '}</label></b>{e.pincode}<br/>
                            <b><label>Alternate Ph. :{' '}</label></b>{e.alternatemobile}<br/>
                            <b><label>Addresstype :{' '}</label></b>{e.addresstype}<br/>
                            </>
                        </Card>
                    )
                    : 
                    (
                        <button className='card-margin'>
                        <Link to='/account/address/form'>
                        <Card title="Add Adress" style={{ width: 300 }} >
                            <p><big><b>+</b></big></p>
                        </Card>
                        </Link>
                        </button>
                    )
                }
                
                <Modal
                    title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    >
                    <form onSubmit={this.handleOk}>
                        <label htmlFor="username">Name*</label>
                        <Input 
                            type='text'
                            name='username'
                            placeholder='name'
                            value={this.state.username}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.username.length === 0 ) ? '*Name is Required' : ''} </small><br/>

                        <label htmlFor="mobile">mobile*</label>
                        <Input
                            type='text'
                            name='mobile'
                            placeholder='mobile'
                            value={this.state.mobile}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.mobile.length === 0 ) ? '*Mobile number is Required' : ''} </small>
                        <small style={{color : 'red'}}> {( (this.state.isSubmit && this.state.mobile.length > 0)  && (this.state.mobile.length < 10 || this.state.mobile.length > 10) ) ? '*Mobile number is Invalid' : ''} </small><br/>

                        <label htmlFor="street">street*</label>    
                        <Input
                            type='text'
                            name='street'
                            placeholder='street'
                            value={this.state.street}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.street.length === 0 ) ? '*Street is Required' : ''} </small><br/>

                        <label htmlFor="landmark">landmark*</label>
                        <Input
                            type='text'
                            name='landmark'
                            placeholder='landmark'
                            value={this.state.landmark}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.landmark.length === 0 ) ? '*Landmark is Required' : ''} </small><br/>
                        
                        <label htmlFor="city">city*</label>
                        <Input
                            type='text'
                            name='city'
                            placeholder='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.city.length === 0 ) ? '*City is Required' : ''} </small><br/>

                        <label htmlFor="pincode">pincode*</label>
                        <Input
                            type='text'
                            name='pincode'
                            placeholder='pincode'
                            value={this.state.pincode}
                            onChange={this.handleChange}
                        /><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.pincode.length === 0 ) ? '*Pincode is Required' : ''} </small><br/>

                        <label htmlFor="states">states</label><br/>
                        <select onChange={this.handlestateChange} value={this.state.states}>
                            <option value=''>select</option>
                            {
                                this.state.statearray.map(e => {
                                    return (
                                        <option value={e} key={e}>{e}</option>
                                    )
                                })
                            }
                        </select><small style={{color : 'red'}}> {( this.state.isSubmit && this.state.states.length === 0 ) ? '*State is Required' : ''} </small><br/>

                        <label htmlFor="alternatemobile">alternatemobile</label>
                        <Input
                            type='text'
                            name='alternatemobile'
                            placeholder='alternatemobile'
                            value={this.state.alternatemobile}
                            onChange={this.handleChange}
                        /><br/><br/>

                        <label htmlFor="addresstype">addresstype</label><br/>
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
                        <small style={{color : 'red'}}> {( this.state.isSubmit && this.state.addresstype.length === 0 ) ? '*Address Type is Required' : ''} </small>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
     return {
         address : state.address
     }
 }
export default connect(mapStateToProps)(UserAddress)


