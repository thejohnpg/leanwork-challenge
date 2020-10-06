import React, { useEffect, useState } from "react";

import { Link  } from 'react-router-dom';

import style from "./style.module.css";

import Background from "./../../assets/bg.webp";

import { AiOutlineArrowRight } from "react-icons/ai";

// import firebase from "./../../firebase";

export default function Signup() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ cpf, setCPF ] = useState("");
  const [ telefone, setTelefone ] = useState("");

  console.log(name)

  // const username = localStorage.getItem('@lean-signup/name');
  // const email = localStorage.getItem('@lean-signup/email');
  // const cpf = localStorage.getItem('@lean-signup/cpf');
  // const telefone = localStorage.getItem('@lean-signup/telefone');

  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem(`@lean-signup/name`, `${name}`);
    localStorage.setItem(`@lean-signup/email`, `${email}`);
    localStorage.setItem(`@lean-signup/cpf`, `${cpf}`);
    localStorage.setItem(`@lean-signup/telefone`, `${telefone}`);

  }

  
  return (
    <div className={style.container}>
      <section class={style.sectionImage}>
        <img src={Background} alt="background-image" />
        <div class={style.overlay}></div>
      </section>

      <section class={style.sectionSignUp}>
        <form class={style.form}>
          <h1> Lean Cadastro </h1>

          <div class={style.inputValues}>
            <span class={style.label}> Nome Completo </span>
            <input type="text" name="name" onChange={event => setName(event.target.value)} />
          </div>

          <div class={style.inputValues}>
            <span class={style.label}> Email </span>
            <input type="text" name="email" onChange={event => setEmail(event.target.value)} />
          </div>

          <div class={style.inputValues}>
            <span class={style.label}> CPF </span>
            <input type="text" name="cpf" onChange={event => setCPF(event.target.value)} />
          </div>

          <div class={style.inputValues}>
            <span class={style.label}> Telefone </span>
            <input type="text" name="telefone" onChange={event => setTelefone(event.target.value)} />
          </div>

          <div class={style.divButton}>
            <button class={style.buttonSignUp} onClick={handleSubmit}> Cadastrar </button>

            <Link to="/home">
            <button class={style.buttonLogin} >
              <span> Login </span>
              <AiOutlineArrowRight size={16} />
            </button>
          </Link>

          </div>

        </form>
      </section>
    </div>
  )
}