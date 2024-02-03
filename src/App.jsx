import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  let contor = 0;
  const bgRef = useRef(null);
  const myRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    screenRandomNumber();
  }, []);

  let { xAxis, yAxis } = Math.random() * 500;

  function screenRandomNumber() {
    let number =
      Math.floor(Math.random()) * (Math.round(Math.random()) * 2 - 1);
    while (number < -10 || number > 60) {
      console.log(number);
      number = Math.floor(Math.random()) * (Math.round(Math.random()) * 2 - 1);
    }
    return number;
  }

  function changeCoordinates() {
    let nonoButton = myRef.current;

    xAxis = Math.floor(Math.random() * 100);
    yAxis = Math.floor(
      Math.random() * 100 * (Math.round(Math.random()) * 2 - 1)
    );

    while (xAxis < -50 || xAxis > 30) {
      xAxis = Math.floor(
        Math.random() * 100 * (Math.round(Math.random()) * 2 - 1)
      );
    }

    while (yAxis < -60 || yAxis > 10) {
      yAxis = Math.floor(
        Math.random() * 100 * (Math.round(Math.random()) * 2 - 1)
      );
    }
    console.log(xAxis);
    console.log(yAxis);
    nonoButton.style.transform =
      "translateX(" + xAxis + "vw) translateY(" + yAxis + "vh)";
    contor++;
    if (contor === 10) {
      let img = imgRef.current;
      let bgImg = bgRef.current;
      img.style.backgroundImage =
        "url(https://media.tenor.com/qNFxd4_OaUEAAAAM/cat-scream.gif)";
      bgImg.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1496034663057-6245f11be793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
      contor++;
    }
  }

  function changeImage() {
    contor = 0;
    let bgImg = bgRef.current;
    let nonoButton = myRef.current;
    let img = imgRef.current;
    img.style.backgroundImage =
      "url(https://media.tenor.com/kqWk7ezzSEYAAAAM/hai.gif)";
    nonoButton.style.transform = "translateX(0) translateY(0)";
    bgImg.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1499233983070-99a5f004e720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  }
  return (
    <div
      ref={bgRef}
      className="w-screen h-screen bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center gap-32 bg-slate-900"
    >
      <div
        ref={imgRef}
        className="h-[40vh] w-[20vw]  bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/474x/87/05/70/870570c7195ea8f9e4fabdfd00ea42a1.jpg)",
        }}
      ></div>
      <div className="flex flex-row gap-32 ">
        <button
          onClick={() => changeImage()}
          className="h-32 w-32 rounded-3xl bg-[#0197F6] shadow-2xl shadow-[#0197F6]"
        >
          Daaa
        </button>
        <button
          transition={{ ease: "easeOut", duration: 2 }}
          ref={myRef}
          id="my-element"
          onMouseOver={() => changeCoordinates()}
          // onMouseEnter={() => changeCoordonates()}
          className="h-32 w-32 rounded-3xl bg-[#D7263D] shadow-2xl shadow-[#D7263D] duration-100"
        >
          nu
        </button>
      </div>
    </div>
  );
}

export default App;
