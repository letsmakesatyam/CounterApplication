import React from "react";
import Count from "./Count";

export default function Page() {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState("");
  const [timer, setTimer] = React.useState(10);
  const [unlocked, setUnlocked] = React.useState(false);

  let countdownStarted = false;

  function startCountdown() {
    if (countdownStarted) return;
    countdownStarted = true;
    let intervalId = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
  }

  function increase() {
    startCountdown();
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= 10 && timer > 0 && !unlocked) {
        setUnlocked(true);
        setMessage("🏆 Speed Reward Unlocked!");
      } else {
        setMessage("");
      }
      return newCount;
    });
  }

  function decrease() {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      if (newCount < 0) {
        setMessage("🚫 Below Zero! Try to stay positive.");
      } else {
        setMessage("");
      }
      return newCount;
    });
  }

  function reset() {
    setCount(0);
    setMessage("");
    setUnlocked(false);
    setTimer(10);
    countdownStarted = false;
  }

  return (
    <div className="counter-wrapper">
      <div className="button-group">
        <button onClick={increase} className="increase-button">+</button>
        <Count number={count} />
        <button onClick={decrease} className="decrease-button">-</button>
        <button onClick={reset} className="reset-button">Reset</button>
      </div>
      <p className="message">{message}</p>
      <p className="timer">⏳ Time Left: {timer}s</p>
    </div>
  );
}
