// Global
import React, { useState, useEffect } from "react";
import DashGlobal from "../../components/DashGlobal";
import Analist from "../../components/Analist";
import firebase from "../../firebaseConfig.js";
import axios from "axios";

// assets
import loading from "../../assets/loading.gif";

// Styles
import "./styles.css";

export default function Home() {
  const [user, setUser] = useState({ data: [] });
  const [techEmail, setTechEmail] = useState({ data: [] });

  const [mspData, setMspData] = useState({ data: [] });
  const [totalMsp, setTotalMsp] = useState();
  const [atendanceMsp, setAtendanceMsp] = useState(0);
  const [countAtendanceMsp, setCountAtendanceMsp] = useState(false);
  const [loadingMsp, setLoadingMsp] = useState(true);

  const [h1, setH1] = useState();
  const [h2, setH2] = useState();
  const [m1, setM1] = useState();
  const [m2, setM2] = useState();

  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();
  const [currentDay, setCurrentDay] = useState();
  const [currentHour, setCurrentHour] = useState();
  const [currentMinutes, setCurrentMinutes] = useState();
  const [currentSeconds, setCurrentSeconds] = useState();
  const [currentFullHour, setCurrentFullHour] = useState();

  const db = firebase.firestore();
  const date = new Date();

  function getUser() {
    const count = [];

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          count.push(doc.data());
        });

        count.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          } else {
            return true;
          }
        });

        setUser({ data: count });
      });
  }

  async function getMsp() {
    await axios
      .get("https://backdashrc.herokuapp.com/msp")
      .then((response) => {
        setMspData(response.data.requests);
        setTotalMsp(response.data.nrequests);
        setLoadingMsp(false);
        // console.log(response.data.requests);
        // console.log(mspData);
      })
      .catch((error) => {
        console.error(error);
        console.log("Erro ao consultar MSP");
      });
  }

  function mspDataLog() {
    console.log("mspDataLog em execução");
    for (var index = 0; index < mspData.length; index++) {
      // setH1(mspData[index].date_end.charAt(11));
      // setH2(mspData[index].date_end.charAt(12));
      // setM1(mspData[index].date_end.charAt(14));
      // setM2(mspData[index].date_end.charAt(15));

      // console.log(`H1: ${h1}`);
      // console.log(`H2: ${h2}`);
      // console.log(`M1: ${m1}`);
      // console.log(`M2: ${m2}`);

      // setCountAtendanceMsp(
      //   mspData[index].date_end.indexOf(currentFullHour) !== -1
      // );

      // if (mspData[index].date_end.indexOf(currentFullHour) !== -1) {
      //   setAtendanceMsp(atendanceMsp++);
      // }

      // setCountAtendanceMsp(
      //   mspData[index].date_end.includes("${currentFullHour}")
      // );

      // if (countAtendanceMsp === true) {
      //   setAtendanceMsp(atendanceMsp + 1);
      // }

      // console.log(setCountAtendanceMsp);
      // console.log(`Tipo de countAtendanceMsp: ${typeof countAtendanceMsp}`);
      // console.log(`Valor de countAtendanceMsp: ${countAtendanceMsp}`);
      // console.log(`AtendanceMsp: ${atendanceMsp}`);
      console.log(mspData[index].tech_username);
      console.log(mspData[index].date_start);
      console.log(mspData[index].date_end);
      // console.log(typeof mspData[index].date_end);
    }

    // console.log(mspData);
    // console.log(typeof mspData[0]);
    // console.log(mspData.requests[2].tech_username);
  }

  function mspCount() {
    // if (countAtendanceMsp === 0) {
    //   setAtendanceMsp(atendanceMsp++);
    // }
  }

  function getDate() {
    setCurrentYear(String(date.getFullYear()));
    setCurrentDay(String(date.getDate()).padStart(2, "0"));
    setCurrentMonth(String(date.getMonth() + 1).padStart(2, "0"));
    setCurrentHour(String(date.getHours() + 3).padStart(2, "0")); // 0-23
    setCurrentMinutes(String(date.getMinutes()).padStart(2, "0")); // 0-59
    setCurrentSeconds(String(date.getSeconds()).padStart(2, "0"));
    setCurrentFullHour(`${currentHour}:${currentMinutes}`);
    // console.log(`${currentDay}/${currentMonth}/${currentYear}`);
    // console.log(`${currentHour}:${currentMinutes}:${currentSeconds}`);
    // console.log("getDate()");
  }

  useEffect(() => {
    getUser();
    getMsp();
    getDate();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getDate();
    }, 1000);
  });

  useEffect(() => {
    mspDataLog();
  }, [mspData]);

  useEffect(() => {
    mspCount();
  }, [countAtendanceMsp]);

  useEffect(() => {
    // console.log(user.data[0]);

    for (var index = 0; index < user.length; index++) {
      setTechEmail(user.data[index].email);
    }

    console.table(techEmail.data);
  }, [user]);

  if (loadingMsp) {
    return (
      <div className="loadingStyle">
        <img src={loading} alt="Blocos girando sinalizando um carregamento" />
      </div>
    );
  }

  return (
    <div className="containerHome">
      <DashGlobal
        totalCall3cx="0"
        attendanceTotal3cx="--"
        pending3cx="-"
        // loggedTotal3cx="--"
        totalCallWpp="0"
        attendanceTotalWpp="--"
        pendingWpp="-"
        // loggedTotalWpp="--"
        totalSessionMsp={totalMsp}
        attendanceTotalMsp={atendanceMsp}
        pendingMsp="-"
        // loggedTotalMsp="--"
      />

      {user.data.map((item, key) => (
        <div className="analistContent" key={key}>
          {item.active === true && (
            <Analist name={item.name} email={item.email} active={item.active} />
          )}
        </div>
      ))}
    </div>
  );
}
