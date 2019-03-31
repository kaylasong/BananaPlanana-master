import React, { Component } from 'react';
import './App.css';
import IMG from './ImageUploader/IMG';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mainText: "boo",
      image: null,
      loading: false,
      ripeness: 0
    }
    this.setLoading=this.setLoading.bind(this)
      this.setRipeness=this.setRipeness.bind(this)
  }

  setRipeness=(num)=>{
      this.setState({
          ripeness: num
      })
  }

  setLoading=()=>{
    if(this.state.loading)
      this.setState({ loading: false });
    else
      this.setState({ loading: true });
    console.log("loading set");
  }

  _loadingImage=()=>{
    if(this.state.loading)
      return(
        <div className="nowLoading">
          <img className="gif" src={require("./loading.gif")}></img>
        </div>
      );
  }

  displayInformation=()=>{
    if(this.state.ripeness===0){
      return(
      <div className="information">
        <div className="info">
            Banana Diagnosis: Unripe <br/>
            Time until ripe: 3-4 days <br/>
            To ripen your bananas faster, try baking them at 300 degrees Fahrenheit for 15-30 minutes. 
        </div>
        <div className="info">
              Green bananas may provide some additional nutrients and benefits that yellow bananas do not.
              They're rich in resistant starch and pectin, which are filling, improve digestive health and
              help lower blood sugar levels. However, some people find that green bananas have a bitter taste
              and bad texture.
        </div>
        <div className="info">
              If you want to eat your bananas now, try putting them into a smoothie. The other ingredients can
              be used to balance out the flavor. 
        </div>
      </div>
      );
    }
    else if(this.state.ripeness===1){
      return(
      <div className="information">
        <div className="info">
            Banana Diagnosis: Ripe <br/>
            Time until ripe: 3-4 days <br/>
            To ripen your bananas faster, try baking them at 300 degrees Fahrenheit for 15-30 minutes.
        </div>
        <div className="info">
              Green bananas may provide some additional nutrients and benefits that yellow bananas do not.
              They're rich in resistant starch and pectin, which are filling, improve digestive health and
              help lower blood sugar levels. However, some people find that green bananas have a bitter taste
              and bad texture.
        </div>
        <div className="info">
              If you want to eat your bananas now, try putting them into a smoothie. The other ingredients can
              be used to balance out the flavor.
        </div>
      </div>
      );
    }
    else if(this.state.ripeness===2){
      return(
      <div className="information">
        <div className="info">
            Banana Diagnosis: Unripe <br/>
            Time until ripe: 3-4 days <br/>
            To ripen your bananas faster, try baking them at 300 degrees Fahrenheit for 15-30 minutes.
        </div>
        <div className="info">
              Green bananas may provide some additional nutrients and benefits that yellow bananas do not.
              They're rich in resistant starch and pectin, which are filling, improve digestive health and
              help lower blood sugar levels. However, some people find that green bananas have a bitter taste
              and bad texture.
        </div>
        <div className="info">
              If you want to eat your bananas now, try putting them into a smoothie. The other ingredients can
              be used to balance out the flavor.
        </div>
      </div>
      );
    }
  }
  
  render() {
    return (
      <div className="entireThing">
        <div className="theTop">
          <img src={require('./peel.png')} className="logo"/> <h1>Appeal</h1>
        </div>
        {this._loadingImage()}
      <body>
          <IMG loading={this.setLoading} setRipe={this.setRipeness}/>
          {this.displayInformation()}

            
      </body>
      </div>
    );
  }
}

export default App;
