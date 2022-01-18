// Global
import React, { useState } from "react";
import { RiComputerFill } from "react-icons/ri";

// Styles
import "../cards.css";

export default function CardMsp(props) {
  const [analistActive, setAnalistActive] = useState(props.activeAnalistMsp);

  return (
    <div className="containerCard">
      <div className="headerCard">
        <RiComputerFill size={30} />
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
      <h2>Ativos: {props.attendanceAnalistMsp}</h2>
      <h2>Finalizados: {props.abandonedAnalistMsp}</h2>
    </div>
  );
}
