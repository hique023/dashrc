// Global
import React, { useEffect, useState } from "react";
import CardMsp from "../../components/CardMsp";
import Card3cx from "../../components/Card3cx";
import CardWpp from "../../components/CardWpp";

// Styles
import "./styles.css";

export default function Analist(props) {
  const [active, setActive] = useState(props.active);

  function testActive() {
    console.log("===========");
    console.log("Nome: " + props.name);
    console.log("Conteúdo de active: " + active);
    console.log("Tipo de active: " + typeof active);
  }

  useEffect(() => {
    testActive();
  }, []);

  return (
    <div className="containerAnalist">
      <h1 className="nameAnalist">{props.name}</h1>
      <Card3cx
        attendanceAnalist3cx="4"
        abandonedAnalist3cx="0"
        activeAnalist3cx={true}
      />
      <CardWpp
        attendanceAnalistWpp="0"
        abandonedAnalistWpp="0"
        activeAnalistWpp={false}
      />
      <CardMsp
        attendanceAnalistMsp="8"
        abandonedAnalistMsp="0"
        activeAnalistMsp={true}
      />
    </div>
  );
}
