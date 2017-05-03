import React from 'react';
import ReactDOM from 'react-dom';

export default class PiggyBank extends React.Component {

  constructor(props){
    console.log("Constructing...");
    super(props);
    this.state = {
      total: 0, 
      amount: 0
      }
  }

  componentWillMount(){
    console.log("Component WILL mount!");
    const button = document.querySelector("#add-button");
    console.log(button);
  }

  componentDidMount(){
    console.log("Component DID MOUNT!");
    const button = document.querySelector("#add-button");
    console.log(button);
  }

  componentWillUpdate(nextProps, nextState){
    console.log("Component Will Update");
    console.log("NextProps:", nextProps);
    console.log("Next State:", nextState);
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component DID update");
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
    console.log("Rendering...");
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p> Total: £{this.state.total}</p>
        <p>Owner: {this.props.owner}</p>
        <input type="number" placeholder="0" onChange= { (event) => {this.handleChange(event)}}></input>
        <button id="add-button" onClick = { () => {this.addToSavings()}}>Add</button>
        <button id="subtract" onClick = { () => {this.subtractFromSavings()}}>Lose £1</button>
      </div>
    )
  }

}