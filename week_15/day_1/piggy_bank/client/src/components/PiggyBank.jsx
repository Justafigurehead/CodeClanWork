import React from 'react';
import ReactDOM from 'react-dom';

export default class PiggyBank extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      total: 0, 
      amount: 0
      }
  }

  addToSavings(){
    this.setState({
      total: this.state.total + this.state.amount
    })
  }

  subtractFromSavings(){
    this.setState({
      total: this.state.total - 1
    })
  }
  
  handleChange(event){    
   this.setState({
    amount: parseInt(event.target.value)
   })
  }

  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p> Total: £{this.state.total}</p>
        <p>Owner: {this.props.owner}</p>
        <input type="number" placeholder="0" onChange= { (event) => {this.handleChange(event)}}></input>
        <button onClick = { () => {this.addToSavings()}}>Add</button>
        <button onClick = { () => {this.subtractFromSavings()}}>Lose £1</button>
      </div>
    )
  }

}