import React, { Component } from 'react'
import { Col, Row ,Button  } from 'antd'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {selectedProduct} from '../../selectors/productSelector'
import {startGetproduct} from '../../actions/productAction'
import ProductDetails from '../ProductDetails/ProductDetails.js'
import Zoom from 'react-img-zoom'

//import ReactImageZoom from 'react-image-zoom';
// import {
//     Magnifier,
//     GlassMagnifier,
//     SideBySideMagnifier,
//     PictureInPictureMagnifier,
//     MOUSE_ACTIVATION,
//     TOUCH_ACTIVATION
//   } from "react-image-magnifiers";
import ReactImageMagnify from 'react-image-magnify';
import './productshow.css'

 class ProductShow extends Component {
     constructor(){
         super()
         this.state = {
             id : '',
             image : '',
             isImageHovered : false
         }
     }  
     componentDidMount(){
        this.props.dispatch(startGetproduct())
     }
     handleClick = (e) => {
        this.setState({ image : e})
        //console.log(e);
     }
    render() {
        //const props = {width: 400, height: 300, zoomWidth: 300 ,img: this.props.product && this.props.product.image[0]};
        return (
            <div className='fluid'>
                <br/>
               {
                this.props.product && (
                    <Row>
                        <Col span={2}>
                            <div>
                            {
                            this.props.product.image.map( (e ,index) => {
                                return (
                                    <div key={e}><br/>
                                    <Button onClick={() => {this.handleClick(e)}} size='large'>
                                        {<img 
                                            width={50}
                                            height={30}
                                            src={e}
                                        />   
                                        }
                                    </Button>
                                    </div>
                                )
                            })
                        }
                            </div>
                        </Col>

                        <Col className='product-show' span={11} onMouseEnter={() => {this.setState({ isImageHovered : true })}}
                                onMouseLeave={() => {this.setState({ isImageHovered : false })} }>
                            {/* <img src={this.state.image ? this.state.image : this.props.product.image[0]}/> */}
                            {/* <Zoom
                                img={this.state.image ? this.state.image : this.props.product.image[0]}
                                zoomScale={1.3}
                                width={600}
                                height={600}
                                transitionTime={0.5}
                            /> */}
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: this.state.image ? this.state.image : this.props.product.image[0]
                                },
                                largeImage: {
                                    src: this.state.image ? this.state.image : this.props.product.image[0] ,
                                    width: 1200, // 1200
                                    height: 1800 // 1800
                                }
                            }} />
                            

                            {/* <ReactImageZoom {...props} /> */}
                            {/* <Magnifier
                            imageSrc={this.props.product.image[0]}
                            imageAlt="Example"
                            largeImageSrc = {this.props.product.image[0]} // Optional
                            /> */}
                        </Col>
                        
                        <Col style={{ display : this.state.isImageHovered ? "none" : "block" }} span={11}>
                            <ProductDetails product={this.props.product}/>
                        </Col>
                    </Row>
                )
               }
            </div>
        )
    }
}
const mapStateToProps = (state,props) =>{
   const id = props.match.params.id
    //let id = localStorage.getItem('selectedProduct')
    // const path = window.location.pathname.split('/')
    // const id = path[path.length - 1]
    //localStorage.setItem('selectedProduct',id)
    return {
        product : selectedProduct(state.products , id)
    }
}

export default withRouter(connect(mapStateToProps)(ProductShow))