// import React, { Component } from 'react'
// import { UploadOutlined  } from '@ant-design/icons';
// import {connect} from 'react-redux'
// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";

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
  
// class Upload extends Component {
//     constructor(){
//         super()
//         this.state ={
//             image :[], 
//             filenames: [],
//             downloadURLs: [],
//             isUploading: false,
//             uploadProgress: 0,
//             username : 'abhishek'
//         }
//     }
//     handleUploadStart = () =>
//     this.setState({
//       isUploading: true,
//       uploadProgress: 0
//     });

//   handleProgress = progress =>
//     this.setState({
//       uploadProgress: progress
//     });

//   handleUploadError = error => {
//     this.setState({
//       isUploading: false
//       // Todo: handle error
//     });
//     console.error(error);
//   };

//   handleUploadSuccess = async filename => {
//     const downloadURL = await firebase
//       .storage()
//       .ref("images")
//       .child(filename)
//       .getDownloadURL();

//     this.setState(oldState => ({
//       filenames: [...oldState.filenames, filename],
//       downloadURLs: [...oldState.downloadURLs, downloadURL],
//       uploadProgress: 100,
//       isUploading: false
//     }));
//   };
  
//   handleSubmit=(e)=>{
//     e.preventDefault()
//     const imagedata = {
//         image : this.state.downloadURLs,
//     }
// }
//     render() {
//         return (
//             <div>
//                 <UploadOutlined key="setting" onClick={this.handlePicUpload}/>
//                 <div>
//                     <FileUploader
//                     accept="image/*"
//                     name="image-uploader-multiple"
//                     randomizeFilename
//                     //filename={this.state.filenames}
//                     storageRef={firebase.storage().ref("images")}
//                     onUploadStart={this.handleUploadStart}
//                     onUploadError={this.handleUploadError}
//                     onUploadSuccess={this.handleUploadSuccess}
//                     onProgress={this.handleProgress}
//                     multiple
//                     />

//                     <p>Progress: {this.state.uploadProgress}</p>

//                     <p>Filenames: {this.state.filenames.join(", ")}</p>
//                     <div>
//                     {this.state.downloadURLs.map((downloadURL, i) => {
//                         return <img key={i} src={downloadURL} />;
//                     })}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Upload