// Global
import React from "react";
import { RiComputerFill } from "react-icons/ri";

// Styles
import "../cards.css";

export default function CardMsp() {
  return (
    <div className="containerCard">
      <RiComputerFill size={30} />
      <h2>Ativos: </h2>
      <h2>Finalizados: </h2>
    </div>
  );
}
