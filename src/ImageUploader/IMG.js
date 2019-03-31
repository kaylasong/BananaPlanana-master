import React, { Component } from 'react'
import './IMG.css'
import axios from 'axios'
import https from 'https'

class IMG extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      file: '', 
      imagePreviewUrl: '' 
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imagePreviewUrl;
    const formData = new FormData();
    console.log(file);

    formData.append("fileData", file.substr(23));
    formData.append("fileName", this.state.file.name)
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    axios({ method: 'post', url: "http://localhost:5000/upload", httpsAgent: agent, data: formData })
      .then(res => {
        console.log(res.data)
        this.props.setRipe(res.data)
      })
      .catch(err => console.warn(err));

  }

  uploadFile(e) {
    e.preventDefault();
    let file = this.state.fileToBeSent;
    const formData = new FormData();

    formData.append("file", file);

    axios
      .post("/api/upload", formData)
      .then(res => console.log(res))
      .catch(err => console.warn(err));
  }

  _handleImageChange(e) {
    e.preventDefault();
    console.log('handle imageChange-', e.target.files[0]);
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  _handleFindRipeness(e){
    {this.props.loading()}
    this._handleSubmit(e);
    {this.props.loading()}
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<img className="image" src={imagePreviewUrl} alt="" />)
    } else {
      $imagePreview = (<div className="previewText">Please pick file to preview</div>)
    }

    return (
      <div className="App">
        <div className="previewComponent">
          <form onSubmit={(e) => this._handleSubmit(e)}>
            <input className="fileInput"
              style={{display:'none'}}
              type="file"
              onChange={(e) => this._handleImageChange(e)}
              ref={fileInput=>this.fileInput=fileInput} />
            <button onClick={()=>this.fileInput.click()}>Pick File</button>

            <button 
              type="submit"
              onClick={(e) => this._handleFindRipeness(e)}>Find Ripeness
            </button>

          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      </div>
    )
  }
}

export default IMG