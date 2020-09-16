import React from 'react'
import {connect} from 'react-redux'
import {Layout, Menu , Input} from 'antd'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import {searchproduct} from '../../actions/searchAction'
import './Header.css'

const {Header} = Layout
const { Search } = Input;


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    
    handleLogout =() => {
        localStorage.clear()
        const redirect = () =>{
            return this.props.history.push('/')
        }
        redirect()
    }

    goToLogin = () => {
        this.props.history.push('/')
    }
    handelSearch = (value) =>{
        let obj = {}
        obj.search = value
        this.props.dispatch(searchproduct(obj))
    }
    
    render () {
        return(
            (this.props.location.pathname == '/' || 
            this.props.location.pathname == '/admin' ||
            this.props.location.pathname == '/owner'
            )  ? '': (
            <Layout >
                <Header className='header-component'>
                <div className="logo">
                    <ion-icon class='icon-book' name="book" size="medium"><Link className='menu-item' to="/home">logo</Link></ion-icon>
                </div>
                {this.props.location.pathname == '/register' ? (
                    <Menu className='menu-component'  mode="horizontal">
                        <Menu.Item className="logout" key="1" onClick={this.goToLogin}>Login</Menu.Item>
                    </Menu>
                ): ''}

                {this.props.location.pathname !== '/register' || localStorage.getItem('authToken') ?  
                <Menu className='menu-component'  mode="horizontal">
                    <Menu.Item className='nav-item' key='6' > <Search placeholder="input search text" onSearch={(value)=>{this.handelSearch(value)}} style={{ width: 650 }}/></Menu.Item>
                    <Menu.Item className='nav-item' key="1"><Link className='menu-item' to="/account">My Account</Link></Menu.Item>
                    <Menu.Item className='nav-item' key="2"><Link className='menu-item' to="/offers">Offers</Link></Menu.Item>
                    <Menu.Item className='nav-item' key="4"> <Link className='menu-item' to="/cart"><FaShoppingCart size={14} color="white"/>{" "}Cart</Link></Menu.Item>
                    <Menu.Item className="nav-item" key="5" onClick={this.handleLogout}><label className='menu-item'>Logout</label></Menu.Item>
                     
                
                </Menu>: ''}
                </Header>
            </Layout>)
        )
    }
} 
const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default withRouter(connect(mapStateToProps)(HeaderComponent))
//	font-weight: 600;
//	overflow-x: hidden;   >> logout