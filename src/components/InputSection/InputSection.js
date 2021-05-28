import React from "react";

import Form from "../UI/Form/Form";
import BusImg from "../../Images/bus2.png";
import "./InputSection.css";

export default function InputSection() {
  return (
    <main className="inputSection">
      <Form />
      <div className="inputSection--image">
        <img className="inputSection--img" alt="BusImg" src={BusImg} />
      </div>
    </main>
  );
}
