import React from "react";
import ReactDOM from "react-dom";
import FileUploader from "react-firebase-file-uploader";
import Firebase from '../../config/firebase';
// Setup Firebase

class File extends React.Component {
  constructor(){
    super()
    this.state ={
      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0
    }
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
      .ref("carosal")
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };
 
  render() {
    return (
      <div>
        <FileUploader
          accept="carosal/*"
          name="image-uploader-multiple"
          randomizeFilename
          storageRef={Firebase.storage().ref("carosal")}
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
    );
  }
}

export default File