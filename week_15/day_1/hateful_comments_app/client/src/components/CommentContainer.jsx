import React from 'react';
import CommentList from './CommentList';

var sampleData= [
  {id: 1, author: "John", text: "Quiche"},
  {id: 2, author: "Kier", text: "Jam"},
  {id: 3, author: "Ellen", text: "I can eat a whole chili!"},
  {id: 4, author: "Person", text: "I say words"},
  {id: 5, author: "Person2", text: "Says some other words"}

]

export default class CommentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: sampleData
    };
  }

  render(){
    return (
        <div>
        <h1>Comments</h1>
        <CommentList comments={this.state.data} />
        </div>
      );
  }
}