import React from 'react'
import {connect} from 'react-redux'
import {Layout, Menu} from 'antd'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom"
import './Header.css'
const {Header} = Layout



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

    render () {
        return(
            (this.props.location.pathname == '/' || 
            this.props.location.pathname == '/admin' ||
            this.props.location.pathname == '/owner'
            )  ? '': (
            <Layout>
                <Header className='header-component'>
                <div className="logo">
                    <ion-icon class='icon-book' name="book" size="medium"></ion-icon>
                </div>
                {this.props.location.pathname == '/register' ? (
                    <Menu className='menu-component'  mode="horizontal">
                        <Menu.Item className="logout" key="1" onClick={this.goToLogin}>Login</Menu.Item>
                    </Menu>
                ): ''}

                {this.props.location.pathname !== '/register' || localStorage.getItem('authToken') ?  
                <Menu className='menu-component'  mode="horizontal">
                    <Menu.Item className='nav-item' key="1"><Link className='menu-item' to="/account">Home</Link></Menu.Item>
                    <Menu.Item className='nav-item' key="2"><Link className='menu-item' to="/account">Customers</Link></Menu.Item>
                    <Menu.Item className='nav-item' key="3"><Link className='menu-item' to="/account">Products</Link></Menu.Item>
                    <Menu.Item className='logout' key="4"> <Link className='menu-item' to="/account">Bills</Link></Menu.Item>
                    <Menu.Item className="logout" key="5" onClick={this.handleLogout}> Logout</Menu.Item>
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