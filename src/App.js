import "./App.css";
import { useState, useEffect } from "react";

import background from "./images/background.webp";

import rocket from "./images/rocket.png";

import rocketsound from "./sounds/rocketsound.mp3";
// import backgroundsound from "./sounds/backgroundmusic.mp3";
import B from "./sounds/B.mp3";
import A from "./sounds/A.mp3";
import D from "./sounds/D.mp3";
import E from "./sounds/E.mp3";
import F from "./sounds/F.mp3";
import G from "./sounds/G.mp3";
import H from "./sounds/H.mp3";
import I from "./sounds/I.mp3";
// import J from "./sounds/J.mp3";
import K from "./sounds/K.mp3";
import P from "./sounds/P.mp3";
// import Q from "./sounds/Q.mp3";
import V from "./sounds/V.mp3";
import W from "./sounds/W.mp3";
// import X from "./sounds/X.mp3";
// import Y from "./sounds/Y.mp3";
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
      text: "akkuschrauber",
      pic_sound: A,
      options: [
        { id: 0, text: "R", isCorrect: false, sound: null },
        { id: 1, text: "A", isCorrect: true, sound: null },
        { id: 2, text: "B", isCorrect: false, sound: null },
        { id: 3, text: "M", isCorrect: false, sound: null },
      ],
    },
    {
      text: "batterie",
      pic_sound: B,
      options: [
        { id: 0, text: "B", isCorrect: true, sound: null },
        { id: 1, text: "A", isCorrect: false, sound: null },
        { id: 2, text: "G", isCorrect: false, sound: null },
        { id: 3, text: "R", isCorrect: false, sound: null },
      ],
    },

    {
      text: "dübel",
      pic_sound: D,
      options: [
        { id: 0, text: "D", isCorrect: true, sound: null },
        { id: 1, text: "B", isCorrect: false, sound: null },
        { id: 2, text: "E", isCorrect: false, sound: null },
        { id: 3, text: "L", isCorrect: false, sound: null },
      ],
    },

    {
      text: "elefant",
      pic_sound: E,
      options: [
        { id: 0, text: "X", isCorrect: false, sound: null },
        { id: 1, text: "F", isCorrect: false, sound: null },
        { id: 2, text: "E", isCorrect: true, sound: null },
        { id: 3, text: "L", isCorrect: false, sound: null },
      ],
    },
    {
      text: "fön",
      pic_sound: F,
      options: [
        { id: 0, text: "F", isCorrect: true, sound: null },
        { id: 1, text: "W", isCorrect: false, sound: null },
        { id: 2, text: "Z", isCorrect: false, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },

    {
      text: "glätteisen",
      pic_sound: G,
      options: [
        { id: 0, text: "G", isCorrect: true, sound: null },
        { id: 1, text: "T", isCorrect: false, sound: null },
        { id: 2, text: "S", isCorrect: false, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },

    {
      text: "handtuch",
      pic_sound: H,
      options: [
        { id: 0, text: "M", isCorrect: false, sound: null },
        { id: 1, text: "I", isCorrect: false, sound: null },
        { id: 2, text: "H", isCorrect: true, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },
    {
      text: "ikea",
      pic_sound: I,
      options: [
        { id: 0, text: "I", isCorrect: true, sound: null },
        { id: 1, text: "S", isCorrect: false, sound: null },
        { id: 2, text: "R", isCorrect: false, sound: null },
        { id: 3, text: "G", isCorrect: false, sound: null },
      ],
    },
    {
      text: "kopfhörer",
      pic_sound: K,
      options: [
        { id: 0, text: "I", isCorrect: false, sound: null },
        { id: 1, text: "F", isCorrect: false, sound: null },
        { id: 2, text: "J", isCorrect: false, sound: null },
        { id: 3, text: "K", isCorrect: true, sound: null },
      ],
    },
    {
      text: "lautsprecher",
      pic_sound: L,
      options: [
        { id: 0, text: "N", isCorrect: false, sound: null },
        { id: 1, text: "L", isCorrect: true, sound: null },
        { id: 2, text: "Q", isCorrect: false, sound: null },
        { id: 3, text: "T", isCorrect: false, sound: null },
      ],
    },

    {
      text: "mütze",
      pic_sound: M,
      options: [
        { id: 0, text: "I", isCorrect: false, sound: null },
        { id: 1, text: "X", isCorrect: false, sound: null },
        { id: 2, text: "M", isCorrect: true, sound: null },
        { id: 3, text: "R", isCorrect: false, sound: null },
      ],
    },

    {
      text: "nagel",
      pic_sound: N,
      options: [
        { id: 0, text: "N", isCorrect: true, sound: null },
        { id: 1, text: "A", isCorrect: false, sound: null },
        { id: 2, text: "L", isCorrect: false, sound: null },
        { id: 3, text: "G", isCorrect: false, sound: null },
      ],
    },
    {
      text: "oliven",
      pic_sound: O,
      options: [
        { id: 0, text: "L", isCorrect: false, sound: null },
        { id: 1, text: "O", isCorrect: true, sound: null },
        { id: 2, text: "I", isCorrect: false, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },

    {
      text: "papier",
      pic_sound: P,
      options: [
        { id: 0, text: "I", isCorrect: false, sound: null },
        { id: 1, text: "Z", isCorrect: false, sound: null },
        { id: 2, text: "A", isCorrect: false, sound: null },
        { id: 3, text: "P", isCorrect: true, sound: null },
      ],
    },

    {
      text: "rutsche",
      pic_sound: R,
      options: [
        { id: 0, text: "T", isCorrect: false, sound: null },
        { id: 1, text: "R", isCorrect: true, sound: null },
        { id: 2, text: "E", isCorrect: false, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },

    {
      text: "säge",
      pic_sound: S,
      options: [
        { id: 0, text: "E", isCorrect: false, sound: null },
        { id: 1, text: "G", isCorrect: false, sound: null },
        { id: 2, text: "S", isCorrect: true, sound: null },
        { id: 3, text: "Y", isCorrect: false, sound: null },
      ],
    },

    {
      text: "tiger",
      pic_sound: T,
      options: [
        { id: 0, text: "O", isCorrect: false, sound: null },
        { id: 1, text: "T", isCorrect: true, sound: null },
        { id: 2, text: "A", isCorrect: false, sound: null },
        { id: 3, text: "H", isCorrect: false, sound: null },
      ],
    },
    {
      text: "ubahn",
      pic_sound: U,
      options: [
        { id: 0, text: "U", isCorrect: true, sound: null },
        { id: 1, text: "B", isCorrect: false, sound: null },
        { id: 2, text: "A", isCorrect: false, sound: null },
        { id: 3, text: "N", isCorrect: false, sound: null },
      ],
    },
    {
      text: "vogel",
      pic_sound: V,
      options: [
        { id: 0, text: "I", isCorrect: false, sound: null },
        { id: 1, text: "V", isCorrect: true, sound: null },
        { id: 2, text: "L", isCorrect: false, sound: null },
        { id: 3, text: "T", isCorrect: false, sound: null },
      ],
    },

    {
      text: "waal",
      pic_sound: W,
      options: [
        { id: 0, text: "E", isCorrect: false, sound: null },
        { id: 1, text: "G", isCorrect: false, sound: null },
        { id: 2, text: "A", isCorrect: false, sound: null },
        { id: 3, text: "W", isCorrect: true, sound: null },
      ],
    },
    {
      text: "zahn",
      pic_sound: Z,
      options: [
        { id: 0, text: "Z", isCorrect: true, sound: null },
        { id: 1, text: "A", isCorrect: false, sound: null },
        { id: 2, text: "G", isCorrect: false, sound: null },
        { id: 3, text: "J", isCorrect: false, sound: null },
      ],
    },
  ];
  const [finalResults, setFinalResults] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [show, setShow] = useState(false);
  const playrocket = new Audio(rocketsound);

  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`./images/${questions[currentQuestion].text}.png`).then((module) => {
      setImage(module.default);
    });
  }, [questions, currentQuestion]);

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
        setShow(!show);
        playrocket.play();
      } else {
        setFinalResults(!finalResults);
      }
    } else {
    }
  };

  const play = (audio) => {
    audio.play();
  };

  return (
    <div className="app">
      {finalResults ? (
        <div className="finalResults">
          <img src={rocket} className="emoji" alt="rocket" />
          <img
            src={background}
            style={{
              width: "100vw",
              height: "100vh",
              zIndex: -1,
              position: "absolute",
            }}
            alt="background"
          />
          <h1
            style={{
              fontSize: "3rem",
              cursor: "pointer",
              background: "#FD3103",
              borderRadius: "20px",
              padding: "5px",
              border: "5px solid black",
              width: "250px",
              marginLeft: "40px",
            }}
            onClick={restart}
          >
            START 🐾
          </h1>
        </div>
      ) : (
        <div className="container">
          <div className="container__questions">
            <div
              className="suche"
              onClick={() =>
                play(new Audio(questions[currentQuestion].pic_sound))
              }
            >
              <img className="suche__bilder" src={image} alt="suchebilder" />
            </div>

            <div className="container__quiz">
              {questions[currentQuestion].options.map((el) => (
                <div
                  className={"quiz__card"}
                  onClick={() => clicked(el.isCorrect)}
                  key={el.id}
                >
                  <div className="Buchstaben">{el.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
