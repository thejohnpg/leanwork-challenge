import React, { useEffect } from "react";

import { BrowserRouter } from 'react-router-dom';

import "./App.css";

import Routes from './routes';

function App() {
  // useEffect(() => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword("email@gmail.com", "123456")
  //     .catch(function (error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ...
  //     });
  // });

  return (

    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>

  );
}

export default App;
