import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      focusPlayer: 'o'
    }
  }

  render(){

    return(
      <div>
        <h1> Board </h1>
          <h2>Player: {this.state.focusPlayer}</h2>
        <table id="Board">
          <tbody>
            <tr id="row-one">
              <Square data-row='0' data-col='0' />
              <Square data-row='0' data-col='1' />
              <Square data-row='0' data-col='2' />
            </tr><tr id="row-two">
              <Square data-row='1' data-col='0' />
              <Square data-row='1' data-col='1' />
              <Square data-row='1' data-col='2' />
            </tr><tr id="row-three">
              <Square data-row='2' data-col='0' />
              <Square data-row='2' data-col='1' />
              <Square data-row='2' data-col='2' />
            </tr>
            </tbody>
        </table>
      </div>
      )
  }
}