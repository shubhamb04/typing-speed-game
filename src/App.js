import React from "react";
import useGame from "./useGame";
function App() {
  const {
    inputRef,
    isTimeRunning,
    text,
    wordCount,
    time,
    handleChange,
    calculateWordCount,
    startGame,
    endGame,
  } = useGame(10);
  return (
    <div className="app">
      <h1>Test your typing skill!</h1>
      <textarea
        ref={inputRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Total Words: {wordCount}</h1>
    </div>
  );
}

export default App;
