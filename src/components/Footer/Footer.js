import React, { Component } from 'react'
import { Layout , Col , Row} from 'antd';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import whatsapp from '../../assets/whatsapp.png'

const {Footer} = Layout;

class FooterComponent extends Component {
    render() {
        return (
            (this.props.location.pathname == '/' || 
            this.props.location.pathname == '/admin' ||
            this.props.location.pathname == '/owner') ? " " : (

                <>
                
                     <Footer >
                     <Row>
                         <Col span={8}>
                             <h3>Quick Links</h3>
                             <Link to='/home'> Home</Link>{" "}|
                             <Link to='/help'> Help</Link>{" "}|
                             <Link to='/account'> Accounts</Link>{" "}|
                             <Link to='/cart'> Cart</Link>
                         </Col>
                         <Col span={8}>
                         <a href="https://api.whatsapp.com/send?phone=919448551045&text=Hi ,came from the ilkal saree website" target="_blank"><img src={whatsapp} width='40px'/></a>
                         </Col>
                         <Col span={8}>
                         
                             <h1>Ilkal Sarees</h1>
                             <h2>Address</h2>
                             <h4>Sappandi Brothers</h4>
                             <h4>Salpeth Ward no.2</h4>
                             <h4>Ilkal - 587125</h4>
                             
                         </Col>
                         </Row>
                     </Footer>
                     <p align='center'>all rights reserved, ilkalsarees © 2020</p>
                
             </>

            )

        )
    }
}
export default withRouter(FooterComponent)