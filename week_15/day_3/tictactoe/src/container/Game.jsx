import React from 'react';
import Board from '../components/Board';

export default class Game extends React.Component{

  render(){
    return(
      <div>
        <h1>Tic Tac Toe</h1>
          <Board />
      </div>
      )    
  }
}