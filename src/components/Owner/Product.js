import React, { Component } from 'react'
import {startAddproduct} from '../../actions/productAction'
import {connect} from 'react-redux'
import Firebase from '../../config/firebase';
import FileUploader from "react-firebase-file-uploader";
import {startGetcategory} from '../../actions/categoryAction'

// firebase.initializeApp({
//     apiKey: "AIzaSyDcOjOvEd_dkjnuH3s4PnWRrzr60KgMmLA",
//     authDomain: "react-upload-bd7bd.firebaseapp.com",
//     databaseURL: "https://react-upload-bd7bd.firebaseio.com",
//     projectId: "react-upload-bd7bd",
//     storageBucket: "react-upload-bd7bd.appspot.com",
//     messagingSenderId: "1010249251241",
//     appId: "1:1010249251241:web:0934e4179cf138c446acb8",
//     measurementId: "G-4LLXSQ1LVT"
//   });
  
 class Product extends Component {
     constructor(){
         super()
         this.state ={
             productname :'',
             price:'',
             description:'',
             stock:'',
             fileList : [],
             color : '',
             filenames: [],
             downloadURLs: [],
             isUploading: false,
             uploadProgress: 0,
             username : 'abhishek',
             size :'',
             categoryselect :[] ,
             category : ''
         }
     }
     //['5f62ef76022d7310a0ba9caa','5f62ef87022d7310a0ba9cab']
    componentDidMount(){
      this.props.dispatch(startGetcategory())
      this.setState({ categoryselect : this.props.category })
      console.log(this.state.category);
    }
    
    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });

  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });

  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };

  handleUploadSuccess = async filename => {
    const downloadURL = await Firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
  handleCategoryChange = (e) =>{
    this.setState({ category : e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const productdata = {
        name : this.state.productname,
        price : this.state.price,
        description : this.state.description,
        stock : this.state.stock,
        image : this.state.downloadURLs,
        color : this.state.color,
        size : this.state.size ,
        category : this.state.category
    }
    console.log(productdata);
    console.log(this.state.downloadURLs);
    this.setState({productname:'',price:'',description:"",stock:'',filenames:[],downloadURLs:[],color:'',size:'',category:''})
    this.props.dispatch(startAddproduct(productdata))
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>productname</label><br/>
                <input 
                type='text'
                name='productname'
                placeholder='productname'
                value={this.state.productname}
                onChange={this.handleChange}
                /><br/>

                <label>price</label>
                <input 
                type='text'
                name='price'
                placeholder='price'
                value={this.state.price}
                onChange={this.handleChange}
                /><br/>

                <label>stock</label>
                <input 
                type='text'
                name='stock'
                placeholder='stock'
                value={this.state.stock}
                onChange={this.handleChange}
                /><br/>

                <label>color</label>
                <input 
                type='text'
                name='color'
                placeholder='color'
                value={this.state.color}
                onChange={this.handleChange}
                /><br/>
                
                <label>description</label>
                <textarea 
                type='text'
                name='description'
                placeholder='description'
                value={this.state.description}
                onChange={this.handleChange}
                /><br/><br/>

                <label>size</label>
                <input 
                type='text'
                name='size'
                placeholder='size'
                value={this.state.size}
                onChange={this.handleChange}
                /><br/><br/>
                <label>Catergory</label><br/>
                <select onChange={this.handleCategoryChange} value={this.state.category}>
                  <option value=''>select</option>
                    {
                        this.props.category.map(e => {
                            return (
                                <option value={e._id} key={e._id}>{e.name}</option>
                            )
                        })
                    }
                </select><br/>

                <label>image</label><br/>
                <div>
                    <FileUploader
                    accept="image/*"
                    name="image-uploader-multiple"
                    randomizeFilename
                    //filename={this.state.filenames}
                    storageRef={Firebase.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    multiple
                    />

                    <p>Progress: {this.state.uploadProgress}</p>

                    <p>Filenames: {this.state.filenames.join(", ")}</p>
                    <div>
                    {this.state.downloadURLs.map((downloadURL, i) => {
                        return <img key={i} src={downloadURL} />;
                    })}
                    </div>
                </div>

                <input
                type='submit'
                value='submit'
                />
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state,props) =>{
  console.log(props);
   return {
       category : state.category
   }
}
export default connect(mapStateToProps)(Product)