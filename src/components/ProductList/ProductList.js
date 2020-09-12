import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import {Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import './productlist.css'

const { Meta } = Card;


 class Lists extends Component {
     constructor(props){
         super()
         this.state={
           
         }
     }
     handleSelectProduct = (id) =>{

     }
    render() {
        return (
            <div className='div-component'>
                {console.log(this.props)}
                <Row gutter={[16 , { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {
                    this.props.products.map((e , index)=> {
                        return (
                        <Col key={index}>
                            <Link to={`/home/${e._id}`}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={e.image[0]}/>}
                                onClick={()=>{this.handleSelectProduct(e._id)}}
                            >
                                <Meta title={e.name} description={<b>{`Rs.${e.price}/-`}</b>} />
                            </Card>
                            </Link>
                        </Col>    
                        )
                    })
                }
                </Row>
            </div>
        )
    }
}
const ProductList = withRouter(Lists)

export default ProductList