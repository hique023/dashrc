// Global
import React from "react";
import CardGlobal from "../CardGlobal";
import Logo from "../../assets/logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";

// Styles
import "./styles.css";

export default function Home() {
  return (
    <div className="containerDashGlobal">
      {/* <h1>Dashboard RC</h1> */}
      <div className="contentDashGlobal">
        <CardGlobal
          title="Ligações"
          finishedTotal="100"
          icon={<BsFillTelephoneFill size={60} />}
          attendanceTotal="3"
          finishedTotal="22"
          loggedTotal="15"
        />
        <CardGlobal
          title="Chats"
          finishedTotal="30"
          icon={<IoLogoWhatsapp size={60} />}
          attendanceTotal="2"
          finishedTotal="20"
          loggedTotal="5"
        />
        <CardGlobal
          title="Acessos"
          finishedTotal="25"
          icon={<RiComputerFill size={60} />}
          attendanceTotal="4"
          finishedTotal="25"
          loggedTotal="8"
        />
        <div className="dashGlobalImg">
          <img src={Logo} alt="Logo de dash" />
        </div>
      </div>
    </div>
  );
}
