import React, { useEffect } from "react";

import "./App.css";

import style from "./style.module.css";
import classNames from 'classnames';

import firebase from "./firebase";

import Background from "./assets/bg.webp";

function App() {
  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("email@gmail.com", "123456")
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  });

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}

      <div className={style.container}>
        <section class={style.sectionImage}>
          <img src={Background} />
          <div class={style.overlay}></div>
        </section>

        <section class={style.sectionSignUp}>
          <form action="" class={style.form}>
            <h1> Lean Cadastro </h1>

            <div class={style.inputValues}>
              <span class={style.label}> Nome Completo </span>
              <input type="text" name="name" />
            </div>

            <div class={style.inputValues}>
              <span class={style.label}> Email </span>
              <input type="text" name="email" />
            </div>

            <div class={style.inputValues}>
              <span class={style.label}> CPF </span>
              <input type="text" name="cpf" />
            </div>

            <div class={style.inputValues}>
              <span class={style.label}> Telefone </span>
              <input type="text" name="telefone" />
            </div>

            <div class={style.divButton}>
              <button class={style.buttonSignUp}> Cadastrar </button>
              <button class={style.buttonLogin}> Login </button>
            </div>

          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
