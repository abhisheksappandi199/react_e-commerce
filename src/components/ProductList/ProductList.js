import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import {Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {startShowproduct}  from '../../actions/showAction'
import './productlist.css'

const { Meta } = Card;


 class ProductList extends Component {
     constructor(props){
         super()
         this.state={
           
         }
     }
     handleSelectProduct = (id) =>{
        this.props.dispatch(startShowproduct(id))
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
const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
     return {
         products : state.products
     }
 }
export default withRouter(connect(mapStateToProps)(ProductList))