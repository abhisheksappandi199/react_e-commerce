import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {startGetcategory} from '../../actions/categoryAction'
import { Carousel,Card , Row , Col,Button} from 'antd';
import {startGetCategoryproduct,startGetproduct} from '../../actions/productAction'
import { Parallax, Background } from 'react-parallax';
import ilkal from '../../assets/ilkal_1.jpg'

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
                  {/* <Carousel autoplay>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                </Carousel> */}

                <Parallax
                    
                    bgImage={ilkal}
                    bgImageAlt="the cat"
                    strength={660}
                >   <br/>
                    <h1 align='right' style={{color : 'white' , padding : '60px' }}>Pure ilkal sarees <br/>
                        <Button  onClick={this.handleGetProducts} align='center' ><Link to='/list'><b>Show Now</b></Link></Button><br/>
                    </h1> 
                   
                    <div style={{ height: '350px' }} />
                </Parallax>

                <div align='center'>
                    <Link to='/list'>
                        <Card hoverable style={{ width: 400 }}  onClick={this.handleGetProducts} align='center' ><h2>all</h2></Card><br/>
                    </Link>
                </div>
               
                {
                    this.props.category.length > 0 && (
                        this.props.category.map((e , index) => {
                            return (
                                <div align='center' key={index}>
                                    <Link to={{pathname: `/list` , search:`${e._id}` }}>
                                        <Card 
                                            hoverable
                                            style={{ width: 400 }} 
                                            onClick={()=>{this.handleCategory(e._id)}}
                                        >
                                            <h2>{e.name}</h2>
                                        </Card><br/>
                                    </Link>
                                </div>
                            )
                        })
                    )
                }
              <h1 align='center'>Why Ilkal Sarees2..?</h1>
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