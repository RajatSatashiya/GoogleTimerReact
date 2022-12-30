import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(100);
  const [milli, setMilli] = useState(100);
  const timerRef = useRef(0);
  const milliRef = useRef(0);

  const changeTimer = () => {};

  const startHandler = () => {
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => setTime((time) => time - 1), 1000);
    milliRef.current = setInterval(() => setMilli((prev) => prev - 1), 10);
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

    setTime(100);
    setMilli(100);
  };

  useEffect(() => {
    if (milli == 0) {
      setMilli(100);
    }
    if (time == 0) {
      clearInterval(milliRef.current);
      clearInterval(timerRef.current);
    }
  }, [milli]);

  return (
    <>
      <form>
        <input
          placeholder="100sec"
          type="text"
          onChange={(e) => setTime(e.target.value)}
        />
      </form>
      <div>
        Timer: {time} {milli}
      </div>

      <div>
        <button onClick={startHandler}>start</button>
        <button onClick={pauseHandler}>pause</button>
        <button onClick={resetHandler}>reset</button>
      </div>
    </>
  );
}
