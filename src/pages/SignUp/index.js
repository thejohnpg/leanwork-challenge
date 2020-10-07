import React, { useState } from "react";

import { Link, useHistory } from 'react-router-dom';

import style from "./style.module.css";

import Background from "./../../assets/bg.webp";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function Signup() {

  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");

  const [msgRedirect, setmsgRedirect] = useState("");
  const [redirect, setRedirect] = useState(false);

  console.log(name)

  function handleSubmit(event){
    event.preventDefault()

    if (name | email | cpf | telefone) {
      localStorage.setItem(`@lean-signup/name`, `${name}`);
      localStorage.setItem(`@lean-signup/email`, `${email}`);
      localStorage.setItem(`@lean-signup/cpf`, `${cpf}`);
      localStorage.setItem(`@lean-signup/telefone`, `${telefone}`);

      setRedirect(true);

      setmsgRedirect(`${name}, por favor aguarde, você será redirecionado ...`)

      setTimeout(() => {
        history.push("/home")
      }, 2000)
    }
    else {
      setmsgRedirect(`Por favor, insira todos os dados solicitados ...`)
    }
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

            {
              name || email || cpf || telefone ?
                <Link to="/home">
                  <button class={style.buttonLogin} >
                    <span> Login </span>
                    <AiOutlineArrowRight size={16} />
                  </button>
                </Link> : ""
            }

          </div>

          <span className={style.msgRedirect}>{msgRedirect}</span>

        </form>
      </section>
    </div>
  )
}