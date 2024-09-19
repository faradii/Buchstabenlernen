import React, { useState } from "react";
import "./App.css";
import gitarre from "./images/gitarre.jpg";
import ameise from "./images/Ameise.jpg";
import elefant from "./images/elefant.jpg";
import igel from "./images/igel.jpg";
import katze from "./images/katze.jpg";
import uhr from "./images/uhr.jpg";
import orange from "./images/orange.jpg";
import sofa from "./images/sofa.jpg";
import fisch from "./images/fisch.jpg";
import ziege from "./images/ziege.jpg";
import löffel from "./images/löffel.jpg";
import rocket from "./images/rocket.png";
import rocketsound from "./sounds/rocketsound.mp3";
import backgroundsound from "./sounds/backgroundmusic.mp3";
import C from "./sounds/C.mp3";
import B from "./sounds/B.mp3";
import A from "./sounds/A.mp3";
import D from "./sounds/D.mp3";
import E from "./sounds/E.mp3";
import F from "./sounds/F.mp3";
import G from "./sounds/G.mp3";
import H from "./sounds/H.mp3";
import I from "./sounds/I.mp3";
import J from "./sounds/J.mp3";
import K from "./sounds/K.mp3";
import P from "./sounds/P.mp3";
import Q from "./sounds/Q.mp3";
import V from "./sounds/V.mp3";
import W from "./sounds/W.mp3";
import X from "./sounds/X.mp3";
import Y from "./sounds/Y.mp3";
import L from "./sounds/L.mp3";
import M from "./sounds/M.mp3";
import N from "./sounds/N.mp3";
import O from "./sounds/O.mp3";
import R from "./sounds/R.mp3";
import S from "./sounds/S.mp3";
import T from "./sounds/T.mp3";
import U from "./sounds/U.mp3";
import Z from "./sounds/Z.mp3";

function App() {
  const questions = [
    {
      text: ameise,
      pic_sound: A,
      options: [
        { id: 0, text: "C", isCorrect: false, sound: C },
        { id: 1, text: "A", isCorrect: true, sound: A },
        { id: 2, text: "E", isCorrect: false, sound: E },
        { id: 3, text: "M", isCorrect: false, sound: M },
      ],
    },
    {
      text: elefant,
      pic_sound: E,
      options: [
        { id: 0, text: "X", isCorrect: false, sound: X },
        { id: 1, text: "O", isCorrect: false, sound: O },
        { id: 2, text: "E", isCorrect: true, sound: E },
        { id: 3, text: "R", isCorrect: false, sound: R },
      ],
    },
    {
      text: fisch,
      pic_sound: F,
      options: [
        { id: 0, text: "F", isCorrect: true, sound: F },
        { id: 1, text: "W", isCorrect: false, sound: W },
        { id: 2, text: "Z", isCorrect: false, sound: Z },
        { id: 3, text: "Y", isCorrect: false, sound: Y },
      ],
    },
    {
      text: gitarre,
      pic_sound: G,
      options: [
        { id: 0, text: "N", isCorrect: false, sound: N },
        { id: 1, text: "E", isCorrect: false, sound: E },
        { id: 2, text: "G", isCorrect: true, sound: G },
        { id: 3, text: "M", isCorrect: false, sound: M },
      ],
    },
    {
      text: igel,
      pic_sound: I,
      options: [
        { id: 0, text: "I", isCorrect: true, sound: I },
        { id: 1, text: "G", isCorrect: false, sound: G },
        { id: 2, text: "E", isCorrect: false, sound: E },
        { id: 3, text: "L", isCorrect: false, sound: L },
      ],
    },
    {
      text: katze,
      pic_sound: K,
      options: [
        { id: 0, text: "I", isCorrect: false, sound: I },
        { id: 1, text: "L", isCorrect: false, sound: L },
        { id: 2, text: "J", isCorrect: false, sound: J },
        { id: 3, text: "K", isCorrect: true, sound: K },
      ],
    },
    {
      text: löffel,
      pic_sound: L,
      options: [
        { id: 0, text: "P", isCorrect: false, sound: P },
        { id: 1, text: "L", isCorrect: true, sound: L },
        { id: 2, text: "Q", isCorrect: false, sound: Q },
        { id: 3, text: "T", isCorrect: false, sound: T },
      ],
    },
    {
      text: orange,
      pic_sound: O,
      options: [
        { id: 0, text: "R", isCorrect: false, sound: R },
        { id: 1, text: "O", isCorrect: true, sound: O },
        { id: 2, text: "H", isCorrect: false, sound: H },
        { id: 3, text: "N", isCorrect: false, sound: N },
      ],
    },
    {
      text: sofa,
      pic_sound: S,
      options: [
        { id: 0, text: "V", isCorrect: false, sound: V },
        { id: 1, text: "P", isCorrect: false, sound: P },
        { id: 2, text: "S", isCorrect: true, sound: S },
        { id: 3, text: "Y", isCorrect: false, sound: Y },
      ],
    },
    {
      text: uhr,
      pic_sound: U,
      options: [
        { id: 0, text: "U", isCorrect: true, sound: U },
        { id: 1, text: "H", isCorrect: false, sound: H },
        { id: 2, text: "R", isCorrect: false, sound: R },
        { id: 3, text: "N", isCorrect: false, sound: N },
      ],
    },

    {
      text: ziege,
      pic_sound: Z,
      options: [
        { id: 0, text: "Z", isCorrect: true, sound: Z },
        { id: 1, text: "B", isCorrect: false, sound: B },
        { id: 2, text: "L", isCorrect: false, sound: L },
        { id: 3, text: "D", isCorrect: false, sound: D },
      ],
    },
  ];
  const [finalResults, setFinalResults] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const playrocket = new Audio(rocketsound);
  const background = new Audio(backgroundsound);
  const [darkmode, setDarkmode] = useState(false);

  const darkMode = () => {
    setDarkmode(!darkmode);
  };

  const restart = () => {
    setFinalResults(!finalResults);
    setCurrentQuestion(0);
  };
  const weiter = () => {
    setShow(false);
  };
  const clicked = (isCorrect) => {
    if (isCorrect) {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        playrocket.play();
        setShow(!show);
      } else {
        setFinalResults(!finalResults);
      }
    } else {
    }
  };

  const play = (audio) => {
    audio.play();
  };
  const play2 = (audio) => {
    audio.play();
  };
  const pause = (audio) => {
    audio.pause();
  };
  return (
    <div className="app">
      {finalResults ? (
        <div className="finalResults">
          <div className="navButtons">
            <button className="soundButton" onClick={() => play2(background)}>
              🎶
            </button>
            <button className="soundButton" onClick={() => pause(background)}>
              🔇
            </button>
            <button className="darkmode" onClick={darkMode}>
              {darkmode ? "🌙" : "🌞"}
            </button>
          </div>

          <img src={rocket} className="emoji" alt="emoji" />

          <h1 style={{ fontSize: "4rem", cursor: "pointer" }} onClick={restart}>
            START
          </h1>
        </div>
      ) : (
        <div className="container">
          {show ? (
            <div>
              <img src={rocket} className="emoji" alt="emoji" />
              <h1
                style={{
                  fontSize: "50px",
                  paddingTop: "350px",
                  cursor: "pointer",
                }}
                onClick={weiter}
              >
                WEITER ➔
              </h1>
            </div>
          ) : (
            <div className="container__questions">
              <div
                className="suche"
                onClick={() =>
                  play(new Audio(questions[currentQuestion].pic_sound))
                }
              >
                <img
                  className="suche__bilder"
                  src={questions[currentQuestion].text}
                  alt="bild"
                />
              </div>

              <div className="container__quiz">
                {questions[currentQuestion].options.map((el) => (
                  <div
                    className={"quiz__card"}
                    onClick={() => clicked(el.isCorrect)}
                    key={el.id}
                  >
                    <div
                      className="Buchstaben"
                      style={
                        darkmode
                          ? { background: "black", color: "white" }
                          : null
                      }
                      onClick={() => play(new Audio(el.sound))}
                    >
                      {el.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
