// Global
import React, { useState, useEffect } from "react";
import DashGlobal from "../../components/DashGlobal";
import Analist from "../../components/Analist";
import firebase from "../../firebaseConfig.js";

// Styles
import "./styles.css";

export default function Home() {
  const [user, setUser] = useState({ data: [] });

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="containerHome">
      <DashGlobal />

      {user.data.map((item, key) => (
        <div className="containerAnalist" key={key}>
          <Analist
            name={item.name}
            // email={item.email}
            // active={item.active}
          />
        </div>
      ))}
    </div>
  );
}
