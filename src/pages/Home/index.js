import React, { useEffect, useState } from "react";

import { useHistory } from 'react-router-dom';

import style from "./style.module.css";

import PageError from './../../assets/erro-404.webp';

import { GrUpdate } from "react-icons/gr";
import { BsFillBackspaceFill } from "react-icons/bs";

import InputMask from "react-input-mask";
import cpfMask from './Mask';

export default function Home() {

  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");

  const [onMsg, setOnMsg] = useState("");

  let localName = localStorage.getItem('@lean-signup/name');
  let localEmail = localStorage.getItem('@lean-signup/email');
  let localCPF = localStorage.getItem('@lean-signup/cpf');
  let localTelefone = localStorage.getItem('@lean-signup/telefone');

  function handleSubmit(event) {

    event.preventDefault()

    if (name || email || cpf || telefone) {
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

  function logout(event) {
    event.preventDefault()

    localStorage.removeItem(`@lean-signup/name`);
    localStorage.removeItem(`@lean-signup/email`);
    localStorage.removeItem(`@lean-signup/cpf`);
    localStorage.removeItem(`@lean-signup/telefone`);

    history.push('/');
  }

  function backToSignup() {
    history.push('/');
  }

  function handleNewPhone(event) {
    let newPhone = event.target.value;
    setTelefone(newPhone)
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
                <input placeholder={localCPF} className={style.inputInfo} onChange={event => setCPF(event.target.value)} value={cpfMask(cpf)} />

                <span className={style.dataInfo}>Telefone</span>
                <InputMask mask="999.999.999-99" placeholder={localTelefone} className={style.inputInfo} type="text" autoComplete="off" onChange={handleNewPhone} autoComplete="0" value={telefone} />

                <button className={style.buttonUpdate} onClick={handleSubmit}><GrUpdate size={18} /> Atualizar Informações </button>
              </div>
            </div>
            <span className={`${style.onMessage} ${onMsg.includes('Não') ? "animate__animated animate__flip" : "animate__animated animate__jackInTheBox"}`}>{onMsg}</span>
            <button className={`animate__animated animate__bounce ${style.btnLogout}`} onClick={logout}>Sair </button>

          </form>

          :

          <div className={style.pageError}>
            <img src={PageError} alt="page-error" />
            <h1>Hey, os dados solicitados estão incompletos, por favor, tente novamente.</h1>
            <button className={`${style.buttonUpdate} btnUpdate`} onClick={backToSignup}><BsFillBackspaceFill size={18} /> Voltar </button>
          </div>
      }
    </div>

  )
}