import React from 'react';
import ReactDOM from 'react-dom';
import CommentContainer from './components/CommentContainer';
import CommentList from './components/CommentList';
window.onload = function(){
  ReactDOM.render(
    <CommentContainer />,
    document.getElementById('app')
  );
}
