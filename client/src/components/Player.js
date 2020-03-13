import React from 'react';
import axios from "axios";
// import dummyData from "../../../data"

export default class PlayersList extends React.Component{

  constructor(){
    super();
    this.state={
      players:[]
    }
  }


  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`).then(response => {
      console.log(response.data);
      this.setState({players:response.data})
    }).catch(err => console.log(err.message));



  }

  render(){
    return (<div>This is app</div>)
  }


}




