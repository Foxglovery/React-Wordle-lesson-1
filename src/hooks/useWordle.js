import React from "react";
import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, SetCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(["ninja", "hello"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  //format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]

  const formatGuess = () => {
    console.log("formatting the guess -", currentGuess);
  };
  // add a new guess to the guesses state
  //update the isCorrect state if the guess is correct
  //add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event and track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log("guesses exhausted");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you've been here before");
        return;
      }
      // the word must be 5 chars long
      if (currentGuess.length !== 5) {
        console.log("5 is the magic number");
        return;
      }
      formatGuess();
    }
    if (key === "Backspace") {
      SetCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        SetCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  // you can just return state like this and components can import and retrieve
  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
