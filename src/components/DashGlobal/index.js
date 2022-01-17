// Global
import React from "react";
import CardGlobal from "../CardGlobal";
import Logo from "../../assets/logo.svg";

// Styles
import "./styles.css";

export default function Home() {
  return (
    <div className="containerDashGlobal">
      {/* <h1>Dashboard RC</h1> */}
      <div className="contentDashGlobal">
        <CardGlobal title="Ligações" value="100" />
        <CardGlobal title="Wpp" value="30" />
        <CardGlobal title="Acessos" value="25" />
        <div className="dashGlobalImg">
          <img src={Logo} alt="Logo de dash" />
        </div>
      </div>
    </div>
  );
}
