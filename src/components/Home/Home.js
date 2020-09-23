import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link ,withRouter} from 'react-router-dom'
import {startGetcategory} from '../../actions/categoryAction'
import { Carousel } from 'antd';
import {startGetCategoryproduct,startGetproduct} from '../../actions/productAction'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
 class Home extends Component {
    componentDidMount(){
        if(this.props.category.length == 0){
            this.props.dispatch(startGetcategory())
        }
     }
     handleCategory =(id) =>{
         this.props.dispatch(startGetCategoryproduct(id))
         this.setState({id})
     }
     handleGetProducts =()=>{
            this.props.dispatch(startGetproduct())
     }
    render() {
        return (
            <div>
                {/* <Row>
                <Col span={4}>
                <ProductFilter/>
                </Col>
                <Col span={20}>
                <ProductList/>
                </Col>
                </Row> */}
                  <Carousel effect="fade">
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                </Carousel>
                <button onClick={this.handleGetProducts}><Link to='/list'>all</Link></button>
                {
                    this.props.category.length > 0 && (
                        this.props.category.map(e => {
                            return (
                                <div key={e._id}>
                                    <button onClick={()=>{this.handleCategory(e._id)}}><Link to={{pathname: `/list` , search:`${e._id}` }}>{e.name}</Link></button>
                                </div>
                            )
                        })
                    )
                }
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        login : state.login,
        products : state.products ,
        category : state.category
    }
}

export default connect(mapStateToProps)(Home)