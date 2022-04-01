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
          finishedTotal={props.totalCall3cx}
          icon={<BsFillTelephoneFill size={60} />}
          attendanceTotal={props.attendanceTotal3cx}
          // finishedTotal="22"
          loggedTotal={props.loggedTotal3cx}
        />
        <CardGlobal
          title="Chats"
          finishedTotal={props.totalCallWpp}
          icon={<IoLogoWhatsapp size={60} />}
          attendanceTotal={props.attendanceTotalWpp}
          // finishedTotal="20"
          loggedTotal={props.loggedTotalWpp}
        />
        <CardGlobal
          title="Acessos"
          finishedTotal={props.totalSessionMsp}
          icon={<RiComputerFill size={60} />}
          attendanceTotal={props.attendanceTotalMsp}
          // finishedTotal="25"
          loggedTotal={props.loggedTotalMsp}
          // loadingMspData={props.loadingMspData}
        />
        <div className="dashGlobalImg">
          <img src={Logo} alt="Logo de dash" />
        </div>
      </div>
    </div>
  );
}
