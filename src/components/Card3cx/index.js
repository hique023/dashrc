// Global
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

// Styles
import "../cards.css";

export default function Card3cx(props) {
  const [analistActive, setAnalistActive] = useState(props.activeAnalist3cx);

  return (
    <div className="containerCard">
      <div className="headerCard">
        <BsFillTelephoneFill size={30} />

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
      <h2>Em atendimento: {props.attendanceAnalist3cx}</h2>
      <h2>Abandonadas: {props.abandonedAnalist3cx}</h2>
    </div>
  );
}
