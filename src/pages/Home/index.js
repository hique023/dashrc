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
  const [mspData, setMspData] = useState({ data: {} });
  const [totalMsp, setTotalMsp] = useState();

  const [loadingMsp, setLoadingMsp] = useState(true);

  const db = firebase.firestore();

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
    axios
      .get("https://backdashrc.herokuapp.com/msp")
      .then((response) => {
        setMspData(response.data);
        setTotalMsp(response.data.nrequests);
        setLoadingMsp(false);
        console.log(mspData);
        console.log(totalMsp);
      })
      .catch((error) => {
        console.error(error);
        console.log("Deu errado");
      });
  }

  useEffect(() => {
    getUser();
    getMsp();
  }, []);

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
