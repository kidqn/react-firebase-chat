import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';

import MessageList from './MessageList';
import MessageBox from './MessageBox';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    var config = {
      apiKey: "AIzaSyDW9Gas5ehiU3q3wfCTzHMjImGg9P2TaZ8",
      authDomain: "chat-nude.firebaseapp.com",
      databaseURL: "https://chat-nude.firebaseio.com",
      projectId: "chat-nude",
      storageBucket: "chat-nude.appspot.com",
      messagingSenderId: "555020403789"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        React Firebase tutorial
        <div className="columns">
          <div className="column is-3"></div>
            <div className="column is-6 chat-content">
              <MessageList db={firebase} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-3"></div>
            <div className="column is-6">
              <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App
