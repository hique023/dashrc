// Global
import React from "react";

// Styles
import "./styles.css";

export default function CardGlobal(props) {
  return (
    <div className="CardGlobal">
      <h1>Total de {props.title}</h1>
      <h2>{props.value}</h2>
    </div>
  );
}
