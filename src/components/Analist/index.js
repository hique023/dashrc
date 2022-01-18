// Global
import React from "react";
import CardMsp from "../../components/CardMsp";
import Card3cx from "../../components/Card3cx";
import CardWpp from "../../components/CardWpp";

// Styles
import "./styles.css";

export default function Analist() {
  return (
    <div className="containerAnalist">
      <h1>Analist</h1>
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
