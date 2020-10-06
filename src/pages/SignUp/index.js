import React, { useEffect } from "react";

import { Link  } from 'react-router-dom';

import style from "./style.module.css";

import Background from "./../../assets/bg.webp";

import { AiOutlineArrowRight } from "react-icons/ai";


import firebase from "./../../firebase";

export default function Signup() {
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