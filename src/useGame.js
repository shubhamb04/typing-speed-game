import { useRef, useState, useEffect } from "react";

function useGame(startTime) {
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [time, setTime] = useState(startTime);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = (text) => {
    const wordArr = text.trim().split(" ");
    const filtered = wordArr.filter((word) => word !== "");
    return filtered.length;
  };

  function startGame() {
    setIsTimeRunning(true);
    setWordCount(0);
    setTime(startTime);
    setText("");
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  useEffect(() => {
    if (time > 0 && isTimeRunning) {
      setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, isTimeRunning]);

  return {
    isTimeRunning,
    text,
    wordCount,
    time,
    handleChange,
    calculateWordCount,
    startGame,
    endGame,
    inputRef,
  };
}

export default useGame;
