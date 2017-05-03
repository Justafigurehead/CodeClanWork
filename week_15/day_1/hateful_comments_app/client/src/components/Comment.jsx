import React from 'react';

export default class Comment extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div>
          <p>{this.props.children}</p>
          <h4>{this.props.author}</h4>
        </div>
      )
  }

}