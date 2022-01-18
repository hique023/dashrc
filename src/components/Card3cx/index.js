// Global
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

// Styles
import "../cards.css";

export default function Card3cx() {
  return (
    <div className="containerCard">
      <BsFillTelephoneFill size={30} />
      <h2>Atendidas: </h2>
      <h2>Abandonadas: </h2>
    </div>
  );
}
