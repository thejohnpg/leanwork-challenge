import React, { useEffect, useState } from "react";

import { Link, useHistory } from 'react-router-dom';

import style from "./style.module.css";

import PageError from './../../assets/erro-404.webp';

export default function Home() {

  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");

  const [ onMsg, setOnMsg ] = useState("");

  let localName = localStorage.getItem('@lean-signup/name');
  let localEmail = localStorage.getItem('@lean-signup/email');
  let localCPF = localStorage.getItem('@lean-signup/cpf');
  let localTelefone = localStorage.getItem('@lean-signup/telefone');

  function handleSubmit(event){
    event.preventDefault()

    if (name || email || cpf || telefone ) {
      localStorage.setItem(`@lean-signup/name`, `${name ? name : localName}`);
      localStorage.setItem(`@lean-signup/email`, `${email ? email : localEmail}`);
      localStorage.setItem(`@lean-signup/cpf`, `${cpf ? cpf : localCPF}`);
      localStorage.setItem(`@lean-signup/telefone`, `${telefone ? telefone : localTelefone}`);
  
      setOnMsg("Atualizado com Sucesso")
  
      setName("")
      setEmail("")
      setCPF("")
      setTelefone("")
    }
    else {
      setOnMsg("Não há dados a serem atualizados")
    }
  }

  return (
    <div>
      {
        localName | localEmail | localCPF | localTelefone ?

          <form>
            <div>
              <h2>Olá, Seja Bem Vindo(a) {`${localName}`}</h2>
              <div className={style.dataDivInfo}>
                <h3>Atualizar Informações</h3>
                <span className={style.dataInfo}> Nome </span>
                <input placeholder={localName} className={style.inputInfo} onChange={event => setName(event.target.value)} value={name} />

                <span className={style.dataInfo}> Email </span>
                <input placeholder={localEmail} className={style.inputInfo} onChange={event => setEmail(event.target.value)} value={email} />

                <span className={style.dataInfo}> CPF </span>
                <input placeholder={localCPF} className={style.inputInfo} onChange={event => setCPF(event.target.value)} value={cpf} />

                <span className={style.dataInfo}>Telefone</span>
                <input placeholder={localTelefone} className={style.inputInfo} onChange={event => setTelefone(event.target.value)} value={telefone} />

                <button className={style.buttonUpdate} onClick={handleSubmit}> Atualizar Informações </button>
              </div>
            </div>
            <span>{ onMsg }</span>
          </form>

          :

          <div className={style.pageError}>
            <img src={PageError} alt="page-error" />
            <h1>Hey, os dados solicitados estão incompletos, por favor, tente novamente.</h1>
          </div>
      }
    </div>

  )
}