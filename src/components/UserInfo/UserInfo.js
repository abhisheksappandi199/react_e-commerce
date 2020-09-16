import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startGetUserAccount} from '../../actions/useraAccountAction'
import { Card, Avatar ,Modal} from 'antd';
import { EditOutlined, EllipsisOutlined ,UploadOutlined} from '@ant-design/icons';
import {startUpdateUser } from '../../actions/useraAccountAction'

const { Meta } = Card;

class UserInfo extends Component {
    constructor(props){
        super()
        this.state = {
            username :'',
            email : '',
            mobile : '',
            visible: false,
            confirmLoading: false,
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetUserAccount())
    }
    showModal = (obj) => {
        this.setState({
            username : obj.username ,
            email : obj.email,
            mobile : obj.mobile,
            visible: true,
        });
      };
    
      handleOk = (e) => {
        e.preventDefault()
        setTimeout(() => {
            this.setState({
              visible: false,
              confirmLoading: false,
            });
          }, 2000)
        const obj ={
            username : this.state.username,
            email : this.state.email,
            mobile : this.state.mobile
        }
        this.props.dispatch(startUpdateUser(obj))
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
    render() {
        return (
            <div>
                <Card 
                    style={{ width: 500 }}

                    actions={[
                    <UploadOutlined />,
                    <EditOutlined key="edit" onClick={()=>{this.showModal(this.props.user)}}/>,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                    avatar={<Avatar src={this.props.user.profile ? this.props.user.profile : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} size='large'/>}
                    title={`hi ${this.props.user.username}`}
                    description={
                        <b>
                        <label>Email :{' '}</label>{this.props.user.email}<br/>
                        <label>Mobile :{' '}</label>{this.props.user.mobile}
                        </b>
                    }
                    >
                        <p>hi bro.</p>
                    </Meta>
                </Card>
                <Modal
                    title="Title"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    >
                        <form onSubmit={this.handleOk}>
                            <label>Name :</label>
                            <input
                            type='text'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                            /><br/>
                            <label>Email :</label>
                            <input
                            type='text'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            /><br/>
                            <label>Mobile :</label>
                            <input
                            type='text'
                            name='mobile'
                            value={this.state.mobile}
                            onChange={this.handleChange}
                            />
                        </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.user
    }
}
export default connect(mapStateToProps)(UserInfo)