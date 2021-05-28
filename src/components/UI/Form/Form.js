import React, { useState } from "react";
import { outputVisible, scrollToOutput } from "../../../Helper/Helper";
import { searchResponse } from "../../../Service/SearchResponse";

import "./Form.css";
import Button from "../Button/Button";

export default function Form() {
  const [bus, setBus] = useState("");

  const [inputs, setInputs] = useState({
    start: "",
    stop: "",
    time: "",
  });

  function handleBusChange(e) {
    setBus(e.target.value);
  }

  function handleChange(e) {
    const { id, value } = e.target;

    setInputs((prevInputs) => {
      return { ...prevInputs, [id]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    outputVisible();
    searchResponse();
    scrollToOutput();
  }

  return (
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form__input"
          placeholder="Search Bus Number"
          id="bus"
          value={bus}
          onChange={handleBusChange}
        />
        <label htmlFor="bus" className="form__label">
          Search Bus Number
        </label>

        <div className="select">
          <select
            id="start"
            className="form__input"
            value={inputs.start}
            onChange={handleChange}
          >
            <option value="" disabled defaultValue>
              Select Your Station
            </option>
          </select>
          <select
            id="stop"
            className="form__input"
            value={inputs.stop}
            onChange={handleChange}
          >
            <option value="" disabled defaultValue>
              Select Your Stop
            </option>
          </select>
        </div>

        <input
          type="time"
          id="time"
          className="form__input"
          placeholder="Enter Time"
          value={inputs.time}
          onChange={handleChange}
        />
        <label htmlFor="time" className="form__label">
          Enter Time
        </label>

        <Button text="search" large="true" />
      </form>
    </div>
  );
}
