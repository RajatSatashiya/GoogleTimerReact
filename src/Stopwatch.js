import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [milli, setMilli] = useState(0);
  const timerRef = useRef(0);
  const milliRef = useRef(0);

  const changeTimer = () => {};

  const startHandler = () => {
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => setTime((time) => time + 1), 1000);
    milliRef.current = setInterval(() => setMilli((prev) => prev + 1), 10);
  };
  const pauseHandler = () => {
    let value = time;
    clearInterval(timerRef.current);
    clearInterval(milliRef.current);
    timerRef.current = 0;
    setTime(value);
  };

  const resetHandler = () => {
    clearInterval(timerRef.current);
    clearInterval(milliRef.current);

    setTime(0);
    setMilli(0);
  };

  useEffect(() => {
    if (milli == 100) {
      setMilli(0);
    }
  }, [milli]);

  return (
    <>
      <div>
        Stopwatch: {time} {milli}
      </div>

      <div>
        <button onClick={startHandler}>start</button>
        <button onClick={pauseHandler}>pause</button>
        <button onClick={resetHandler}>reset</button>
      </div>
    </>
  );
}
