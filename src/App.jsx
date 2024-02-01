import { useRef, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import valentineCat from "./assets/ValentineCat.jpg";
import screamingCat from "./assets/screamingCat.gif";
import happyCat from "./assets/HappyCat.gif";
import hearts from "./assets/hearts.jpg";
console.log(valentineCat);

function App() {
  let contor = 0;
  const bgRef = useRef(null);
  const myRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    if (myRef.current) console.log(myRef.current);
    if (imgRef.current) console.log(imgRef.current);
    if (bgRef.current) console.log(bgRef.current);
  }, []);

  let { xAxis, yAxis } = Math.random() * 500;

  function changeCoordinates() {
    let nonoButton = myRef.current;
    xAxis = Math.floor(Math.random() * 38);
    yAxis = Math.floor(
      Math.random() * 10 * (Math.round(Math.random()) * 2 - 1)
    );

    nonoButton.style.transform =
      "translateX(" + xAxis + "vw) translateY(" + yAxis + "vh)";
    contor++;
    if (contor === 10) {
      let img = imgRef.current;
      img.style.backgroundImage = "url(" + screamingCat + ")";
      contor++;
    }
  }

  function changeImage() {
    let bgImg = bgRef.current;
    let nonoButton = myRef.current;
    let img = imgRef.current;
    img.style.backgroundImage = "url(" + happyCat + ")";
    nonoButton.style.transform = "translateX(0) translateY(0)";
    bgImg.backgroundImage = "url(" + hearts + ")";
  }
  return (
    <div
      ref={bgRef}
      className="w-screen h-screen flex flex-col justify-center items-center gap-32 bg-slate-900"
    >
      <div
        ref={imgRef}
        className="h-[40vh] w-[20vw]  bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: "url(" + valentineCat + ")" }}
      ></div>
      <div className="flex flex-row gap-32 ">
        <motion.button
          onClick={() => changeImage()}
          className="h-32 w-32 rounded-3xl bg-[#0197F6] shadow-2xl shadow-[#0197F6]"
        >
          Daaa
        </motion.button>
        <motion.button
          transition={{ ease: "easeOut", duration: 2 }}
          ref={myRef}
          id="my-element"
          onMouseOver={() => changeCoordinates()}
          // onMouseEnter={() => changeCoordonates()}
          className="h-32 w-32 rounded-3xl bg-[#D7263D] shadow-2xl shadow-[#D7263D] duration-300"
        >
          nu
        </motion.button>
      </div>
    </div>
  );
}

export default App;
