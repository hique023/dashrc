// Global
import React from "react";
import CardGlobal from "../CardGlobal";
import Logo from "../../assets/logo.svg";

// Styles
import "./styles.css";

export default function Home() {
  return (
    <div className="containerDashGlobal">
      <CardGlobal />
      <CardGlobal />
      <CardGlobal />
      <CardGlobal />
      {/* <h1>Total de Ligações:</h1>
      <h1>Total de Wpp:</h1>
      <h1>Total de Acessos:</h1>
      <div className="dashGlobalImg">
        <img src={Logo} alt="Logo de dash" />
      </div> */}
    </div>
  );
}
