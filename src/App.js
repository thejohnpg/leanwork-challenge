import React, { useEffect } from 'react';
import './App.css';

import firebase from './firebase';

function App() {

  useEffect(() => {
    firebase.auth().signInWithEmailAndPassword("email@gmail.com", "123456").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  })


  return (
    <div className="App">
      <header className="App-header">
      
      </header>
      
    </div>
  );
}

export default App;
