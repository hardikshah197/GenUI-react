import $ from "jquery";

// Display Output Section
export const outputVisible = function () {
  const outputEl = document.querySelector(".output");
  outputEl.style.display = "block";
};

// Scroll to the Output Section
export const scrollToOutput = function () {
  const outputEl = document.querySelector(".output");
  const coords = outputEl.getBoundingClientRect();
  window.scrollTo({
    left: coords.left + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    behavior: "smooth",
  });
};

// // Compare Time
// const compareTime = function (fTime, sTime) {
//   console.log(fTime, sTime);
//   const f1 = fTime.split(":");
//   const s1 = sTime.split(":");
//   return (
//     new Date(
//       parseInt("2001", 10),
//       parseInt("01", 10) - 1,
//       parseInt("01", 10),
//       parseInt(f1[0], 10),
//       parseInt(f1[1], 10)
//     ) >
//     new Date(
//       parseInt("2001", 10),
//       parseInt("01", 10) - 1,
//       parseInt("01", 10),
//       parseInt(s1[0], 10),
//       parseInt(s1[1], 10)
//     )
//   );
// };

// Add select Options
export const renderOptions = function (data, El) {
  const select = document.getElementById(El);
  select.innerHTML = data;
};

export const getJSON =  function (url, obj, callback, inputEl) {
  $.get(url, obj).done(function (response) {
          callback(response, inputEl);
  });
};


// Render Output Cards


export const renderCards =function ( url, obj) {
  try{
  $.get(url, obj).done(function (response) {

  const container = document.querySelector(".output__container");

  // const generateMarkup = function (bus) {
  //   return container.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //     <div class="card__container">
  //        <h2> Bus Number : ${bus.busNo}</h2>
  //       <div class="card">
  //          ${bus.key.map((det) => {
  //            return `<div class="card__details ${
  //              compareTime(data.time, det.etime) ? "red" : ""
  //            }">
  //            <p><span>Stop</span> : ${det.stop}</p>
  //            <p><span>Time </span>: ${det.ftime} </p>
  //            <p><span>Expected Time</span> : ${det.etime} </p>
  //            </div>`;
  //          })}
           
  //       </div>
  //       </div>

  //     `
  //   );
  // };
  //   const { buses } = data;

  container.innerHTML = response;

  // buses.map(generateMarkup);
  
  });
  }
  catch(err){
    console.log(err);
  }

};
