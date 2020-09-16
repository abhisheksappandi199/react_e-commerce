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
        setTimeout(() => {
            this.setState({
              visible: false,
              confirmLoading: false,
            });
          }, 2000)
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
        this.props.dispatch(startUpdateaddress(this.state.id , obj))
          this.setState({
            confirmLoading: true,
          });
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
    }
    render() {
        return (
            <div>
                <Row gutter={[16 , { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {
                    this.props.address.map((e , index)=> {
                        return (
                        <Col key={index}>
                            <Card 
                                title={<h3>Address {index+1}</h3>}
                                style={{ width: 430 }}
                                actions={[ <EditOutlined key="edit" onClick={()=>{this.showModal(e)}}/> , <DeleteOutlined onClick={()=>{this.handleDelete(e._id)}}/>]}
                            >
                                <b>
                                <label>Name   :{' '}</label>{e.name}<br/>
                                <label>Mobile :{' '}</label>{e.mobile}<br/>
                                <label>Street :{' '}</label><p>{e.street}</p><br/>
                                <label>Landmark :{' '}</label>{e.landmark}<br/>
                                <label>City :{' '}</label>{e.city}<br/>
                                <label>State :{' '}</label>{e.states}<br/>
                                <label>Pincode :{' '}</label>{e.Pincode}<br/>
                                <label>Alternate Ph. :{' '}</label>{e.alternatemobile}<br/>
                                <label>Addresstype :{' '}</label>{e.addresstype}<br/>
                                </b>
                            </Card>
                        </Col>    
                        )
                    })
                }
                </Row>

                <Row gutter={[16 , 24]}>
                <button className='card-margin'>
                <Link to='/account/address/form'>
                <Card title="Add Adress" style={{ width: 300 }} >
                    <p><big><b>+</b></big></p>
                </Card>
                </Link>
                </button>
                </Row>
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
                        /><br/>

                        <label htmlFor="mobile">mobile*</label>
                        <Input
                            type='text'
                            name='mobile'
                            placeholder='mobile'
                            value={this.state.mobile}
                            onChange={this.handleChange}
                        /><br/>

                        <label htmlFor="street">street*</label>    
                        <Input
                            type='text'
                            name='street'
                            placeholder='street'
                            value={this.state.street}
                            onChange={this.handleChange}
                        /><br/>

                        <label htmlFor="landmark">landmark*</label>
                        <Input
                            type='text'
                            name='landmark'
                            placeholder='landmark'
                            value={this.state.landmark}
                            onChange={this.handleChange}
                        /><br/>
                        
                        <label htmlFor="city">city*</label>
                        <Input
                            type='text'
                            name='city'
                            placeholder='city'
                            value={this.state.city}
                            onChange={this.handleChange}
                        /><br/>

                        <label htmlFor="pincode">pincode*</label>
                        <Input
                            type='text'
                            name='pincode'
                            placeholder='pincode'
                            value={this.state.pincode}
                            onChange={this.handleChange}
                        /><br/>

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
                        </select><br/>

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


