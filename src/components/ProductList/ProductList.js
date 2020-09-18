import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import {Link } from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {startShowproduct}  from '../../actions/showAction'
import {startGetproduct} from '../../actions/productAction'
import './productlist.css'

const { Meta } = Card;


 class ProductList extends Component {
     constructor(props){
         super()
         this.state={
           
         }
     }
     componentDidMount(){
        if(this.props.products.length == 0){
            this.props.dispatch(startGetproduct())
        }
     }
     handleSelectProduct = (id) =>{
        this.props.dispatch(startShowproduct(id))
     }
    //  category = () => {
    //     if(this.props.category){
    //         console.log(this.props.category);
    //         if(this.props.category._id){
    //             console.log('in catregory');
    //             return (this.props.products.filter(e => e.category == this.props.category._id))
    //         }
    //         else {
    //             return (this.filter())
    //         }
    //      }
    //      else {
    //         console.log('in cat in filter');
    //         return (this.filter())
    //     }
    //  }
    filter = () =>{
         if(this.props.search.length > 0){
              if(this.props.search[0].search){
                  return (this.props.products.filter(ele => ele.name.includes(this.props.search[0].search)))
              }
              else if(this.props.search[0].minprice){
                  return (this.props.products.filter(ele =>(this.props.search[0].minprice) <= ele.price && ele.price <=(this.props.search[0].maxprice) ))
              }
              else if(this.props.search[0].color){
                  return (this.props.products.filter(ele => ele.color == this.props.search[0].color))
              }
              else if(this.props.search[0].sort == 'lowtohigh'){
                    return (this.props.products.sort((a ,b) => a.price - b.price))
              }
              else if(this.props.search[0].sort == 'hightolow'){
                return (this.props.products.sort((a ,b) => b.price - a.price))
              }
              else if(this.props.search[0].sort == 'new'){
                return (this.props.products.sort((a ,b) => a.createdAt - b.createdAt))
              }
              else if(this.props.search[0].sort == 'featured'){
                return this.props.products
              }
              else {
                return this.props.products
              }
         } 
         else {
             return this.props.products
         }
     }

    render() {
        return (
            <div className='div-component'>
                {console.log(this.props)}
                <Row gutter={[16 , { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                {
                     (this.filter()).map((e , index)=> {
                        return (
                        <Col key={index}>
                            <Link to={`/list/${e._id}`}>
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
    const path = window.location.pathname.split('/')
    const id = path[path.length - 1]
    console.log(props);
     return {
         products : state.products ,
         search : state.search ,
         //category : state.category.find(e => e._id == id)
     }
 }
export default withRouter(connect(mapStateToProps)(ProductList))