// Global
import React, { useState } from "react";

// assets
// import loading from "../../assets/loading.gif";

// Styles
import "./styles.css";

export default function CardGlobal(props) {
  // const [loadingMsp, setLoadingMsp] = useState(props.loadingMspData);

  return (
    // <div className="CardGlobal">
    //   {loadingMsp === true ? (
    //     <div className="loadingStyle">
    //       <img src={loading} alt="Blocos girando sinalizando um carregamento" />
    //       {alert(loadingMsp)}
    //     </div>
    //   ) : (
    <div className="CardGlobal">
      <div className="iconChanel">{props.icon}</div>
      <div className="contentCardGlobal">
        <h1>Total de {props.title}</h1>
        <h2>{props.finishedTotal}</h2>
        <h3>Em atendimento: {props.attendanceTotal}</h3>
        {/* <h3>Finalizados: {props.finishedTotal}</h3> */}
        <h3>Agentes logados: {props.loggedTotal}</h3>
      </div>
    </div>
    // )}
    // </div>
  );
}
