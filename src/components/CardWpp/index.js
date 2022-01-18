// Global
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

// Styles
import "../cards.css";

export default function CardWpp() {
  return (
    <div className="containerCard">
      <IoLogoWhatsapp size={30} />
      <h2>Ativos: </h2>
      <h2>Finalizados: </h2>
    </div>
  );
}
