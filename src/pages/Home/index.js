import React, { useEffect } from "react";

import style from "./style.module.css";

import PageError from './../../assets/erro-404.webp';

export default function Home() {

  const localName = localStorage.getItem('@lean-signup/name');
  const localEmail = localStorage.getItem('@lean-signup/email');
  const localCPF = localStorage.getItem('@lean-signup/cpf');
  const localTelefone = localStorage.getItem('@lean-signup/telefone');
  
  return(
    <div>
      {
        localName | localEmail | localCPF | localTelefone ? 
        
        <div>
          <h2>Olá, Seja Bem Vindo(a) {`${localName}`}</h2>
          <div className={style.dataDivInfo}>
            <h3>Atualizar Informações</h3>
            <span className={style.dataInfo}> Nome </span>
            <input placeholder={localName} className={style.inputInfo} />

            <span className={style.dataInfo}> Email </span>
            <input placeholder={localEmail} className={style.inputInfo} />

            <span className={style.dataInfo}> CPF </span>
            <input placeholder={localCPF} className={style.inputInfo} />

            <span className={style.dataInfo}>Telefone</span>
            <input placeholder={localTelefone} className={style.inputInfo} />

            <button className={style.buttonUpdate}> Atualizar Informações </button>
          </div>
        </div> 

        : 
        
        <div className={style.pageError}>
          <img src={PageError} alt="page-error" />
          <h1>Hey, os dados solicitados estão incompletos, por favor, tente novamente.</h1>
        </div> 
      }
    </div>
   
  )
}