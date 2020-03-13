import React from 'react';
import axios from "axios";


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
    return (
    <div className="player-list">
      <h1>Player list</h1>
      {this.state.players.map(player=>{
        return (<div key={player.id} className="player">
          <h1>{player.name}</h1>
          <p>from {player.country} {player.searches} searches</p>
        </div>)
      })}
    </div>
    )
  }


}




