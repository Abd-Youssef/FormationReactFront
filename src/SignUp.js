import Component1 from "./Component1";
import Btn from "./Btn";
import React, { useState } from "react";
import { IP } from "./Config/config";

export default function SignUp() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const afficher = () => {
    // console.log("First name:",first_name);
    // console.log("Last name:",last_name);
    // console.log("E-mail:",email);
    // console.log("Password:",password);
    fetch( IP+"signup", {
      method: "POST",
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json ",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Component1 name="First Name" setComponement={setFirstName} />
      <Component1 name="Last Name" setComponement={setLastName} />
      <Component1 name="E-mail" setComponement={setEmail} />
      <Component1 name="Password" type="password" setComponement={setPassword} />
      <Btn name="Sign Up" afficher={afficher} />
    </div>
  );
}
export { SignUp };


