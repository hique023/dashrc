// Global
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

// Styles
import "./styles.css";

export default function CardGlobal(props) {
  return (
    <div className="CardGlobal">
      <div className="iconChanel">{props.icon}</div>
      <div className="contentCardGlobal">
        <h1>Total de {props.title}</h1>
        <h2>{props.value}</h2>
        <h3>Em atendimento: {props.attendance}</h3>
        <h3>Finalizados: {props.finished}</h3>
      </div>
    </div>
  );
}
