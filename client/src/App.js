import React from 'react';
import PlayerList from "./components/PlayersList"
import NavBar from "./components/NavBar"
import './App.css';

export default class App extends React.Component{


  render(){
    return (
    <div>
      <NavBar></NavBar>
      <PlayerList></PlayerList>   
    </div>
      )
  }


}




