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

  const [mspData, setMspData] = useState({ data: [] });
  const [totalMsp, setTotalMsp] = useState();
  const [atendanceMsp, setAtendanceMsp] = useState();
  const [loadingMsp, setLoadingMsp] = useState(true);

  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();
  const [currentDay, setCurrentDay] = useState();
  const [currentHour, setCurrentHour] = useState();
  const [currentMinutes, setCurrentMinutes] = useState();
  const [currentSeconds, setCurrentSeconds] = useState();

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
    for (var index = 0; index < mspData.length; index++) {
      // console.log("Texto");
      console.log(mspData[index].tech_username);
      console.log(mspData[index].date_start);
    }

    console.log("mspDataLog em execução");
    console.log(mspData);
    console.log(typeof mspData[0]);
    // console.log(mspData.requests[2].tech_username);
  }

  function getDate() {
    setCurrentYear(String(date.getFullYear()));
    setCurrentDay(String(date.getDate()).padStart(2, "0"));
    setCurrentMonth(String(date.getMonth() + 1).padStart(2, "0"));
    setCurrentHour(String(date.getHours()).padStart(2, "0")); // 0-23
    setCurrentMinutes(String(date.getMinutes()).padStart(2, "0")); // 0-59
    setCurrentSeconds(String(date.getSeconds()).padStart(2, "0"));
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

  if (loadingMsp) {
    return (
      <div className="loadingStyle">
        <img src={loading} alt="Blocos girando sinalizando um carregamento" />
      </div>
    );
  }

  return (
    <div className="containerHome">
      <h1>
        {currentHour}:{currentMinutes}:{currentSeconds}
      </h1>
      <h1>
        {currentDay}/{currentMonth}/{currentYear}
      </h1>

      <DashGlobal
        totalCall3cx="0"
        attendanceTotal3cx="--"
        loggedTotal3cx="--"
        totalCallWpp="0"
        attendanceTotalWpp="--"
        loggedTotalWpp="--"
        totalSessionMsp={totalMsp}
        // loadingMspData={loadingMsp}
        attendanceTotalMsp="--"
        loggedTotalMsp="--"
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
