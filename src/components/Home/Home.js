import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {startGetcategory} from '../../actions/categoryAction'
import { Carousel,Card , Row , Col} from 'antd';
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
                  <Carousel effect="fade">
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                </Carousel>
                    <Link to='/list'>
                        <Card hoverable style={{ width: 400 }} align='center' onClick={this.handleGetProducts} >all</Card>
                    </Link>
                <Row gutter={[16 , { xs: 8, sm: 16, md: 24, lg: 32 }]} align='center'>

                {
                    this.props.category.length > 0 && (
                        this.props.category.map(e => {
                            return (
                                <Col key={e._id}>
                                    <Link to={{pathname: `/list` , search:`${e._id}` }}>
                                        <Card 
                                            hoverable
                                            style={{ width: 400 }} 
                                            align='center' 
                                            onClick={()=>{this.handleCategory(e._id)}}
                                        >
                                            {e.name}
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })
                    )
                }
                </Row>
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