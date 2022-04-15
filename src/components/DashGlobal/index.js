// Global
import React from "react";
import CardGlobal from "../CardGlobal";
import Logo from "../../assets/logoDash.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";

// Styles
import "./styles.css";

export default function Home(props) {
  return (
    <div className="containerDashGlobal">
      {/* <h1>Dashboard RC</h1> */}
      <div className="contentDashGlobal">
        <CardGlobal
          title="Ligações"
          icon={<BsFillTelephoneFill size={60} />}
          attendanceTotal={props.attendanceTotal3cx}
          pending={props.pending3cx}
          finishedTotal={props.totalCall3cx}
          // loggedTotal={props.loggedTotal3cx}
        />
        <CardGlobal
          title="Chats"
          icon={<IoLogoWhatsapp size={60} />}
          attendanceTotal={props.attendanceTotalWpp}
          pending={props.pendingWpp}
          finishedTotal={props.totalCallWpp}
          // loggedTotal={props.loggedTotalWpp}
        />
        <CardGlobal
          title="Acessos"
          icon={<RiComputerFill size={60} />}
          attendanceTotal={props.attendanceTotalMsp}
          pending={props.pendingMsp}
          finishedTotal={props.totalSessionMsp}
          // loggedTotal={props.loggedTotalMsp}
        />
        <div className="dashGlobalImg">
          <img src={Logo} alt="Logo de dash" />
        </div>
      </div>
    </div>
  );
}
