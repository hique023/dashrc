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
          value="100"
          icon={<BsFillTelephoneFill size={60} />}
          attendance="3"
          finished="22"
        />
        <CardGlobal
          title="Chats"
          value="30"
          icon={<IoLogoWhatsapp size={60} />}
          attendance="2"
          finished="20"
        />
        <CardGlobal
          title="Acessos"
          value="25"
          icon={<RiComputerFill size={60} />}
          attendance="4"
          finished="25"
        />
        <div className="dashGlobalImg">
          <img src={Logo} alt="Logo de dash" />
        </div>
      </div>
    </div>
  );
}
