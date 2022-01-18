// Global
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

// Styles
import "../cards.css";

export default function CardWpp(props) {
  const [analistActive, setAnalistActive] = useState(props.activeAnalistMsp);

  return (
    <div className="containerCard">
      <div className="headerCard">
        <IoLogoWhatsapp size={30} />
        {analistActive ? (
          <span
            className="analistActive"
            style={{ backgroundColor: "#56ff56" }}
          ></span>
        ) : (
          <span
            className="analistActive"
            style={{ backgroundColor: "#ff5656" }}
          ></span>
        )}
      </div>
      <h2>Ativos: {props.attendanceAnalistWpp}</h2>
      <h2>Finalizados: {props.abandonedAnalistWpp}</h2>
    </div>
  );
}
