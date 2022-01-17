// Global
import React from "react";
import CardMsp from "../../components/CardMsp";
import Card3cx from "../../components/Card3cx";
import CardWpp from "../../components/CardWpp";

// Styles
import "./styles.css";

export default function Analist() {
  return (
    <div className="containerCard">
      <h1>Analist</h1>
      <CardMsp />
      <Card3cx />
      <CardWpp />
    </div>
  );
}
