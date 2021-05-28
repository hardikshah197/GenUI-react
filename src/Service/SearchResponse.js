import { renderCards, renderOptions, getJSON } from "../Helper/Helper";

var url = "/Bus_System/displayGen";

export const showStat = async function () {
  try {
    getJSON(url, { type: "station" }, renderOptions, "start");
  } catch (err) {
    console.error(err);
  }
};

export const showStop = async function () {
  try {
    getJSON(url, { type: "showStops" }, renderOptions, "stop");
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener("load", function () {
  showStat();
  showStop();
});

export const searchResponse = async function () {
  try {
    renderCards(
      url,
      {
        type: "search",
        time: document.getElementById("time").value,
        stop: document.getElementById("stop").value,
        stat: document.getElementById("start").value,
      },
      ".output__container"
    );
  } catch (err) {
    console.err("Error :: "+ err);
  }
};
