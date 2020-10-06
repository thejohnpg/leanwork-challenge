import React, { useEffect } from "react";

import style from "./style.module.css";

export default function Home() {

  const localName = localStorage.getItem('@lean-signup/name');
  const localEmail = localStorage.getItem('@lean-signup/email');
  const localCPF = localStorage.getItem('@lean-signup/cpf');
  const localTelefone = localStorage.getItem('@lean-signup/telefone');
  
  return(
    <div>
      <h1>Home</h1>
      <div></div>
      <div></div>
    </div>
    
  )
}