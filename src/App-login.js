import React, { Component } from 'react';

import './App.css';

function formatDate(date){
  return date.toLocaleDateString()
}
function Comment(props){
  return (
    <div className="Comment">
      <div className="UserInfo">
        {/* <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}
const author = {
  name:'login'
}
const App = <Comment author={author} date={new Date()} text={'1111'} />
export default App;
