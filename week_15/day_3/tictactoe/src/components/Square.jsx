import React from 'react';


 export default class Square extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      move:" "
    }  
  }

  handleClick(event){
    event.preventDefault();
    this.setState({
      move: this.props.player
    })
  }

  render(){
    return(
      <td>
        <button onClick={(event)=>{this.handleClick(event)}}>{this.state.move}</button>
      </td>
    )
  }
}

