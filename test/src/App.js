import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactInfo extends Component {
  render(){
    return(

      <div>{this.props.name} {this.props.call}</div>

    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {name : "a", call : 1},
        {name : "b", call : 2},
        {name : "c", call : 3},
        {name : "d", call : 4}
      ]
    };
  }

  render(){

    const mapToCom = (data) =>{
      return (
        data.map(

          (currentData, i) => {
            return (
              <ContactInfo
               name={currentData.name}
               call={currentData.call}
               key ={i}/>
            );
          }

        )
      );
    }


    return(
      <div>{mapToCom(this.state.data)}</div>
    );
  }

}

export default App;
