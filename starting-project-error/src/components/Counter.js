import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const INITIAL_COUNT = 100;
  const twoDigits = (num) => String(num).padStart(2, "0");
  const [secondsRemainingCount, setSecondsRemainingCount] =
    useState(INITIAL_COUNT);

  const secondsToDisplay = secondsRemainingCount % 60;
  const minutesRemaining = (secondsRemainingCount - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;
  const handleStart = async () => {
    setstate(STATUS.STARTED);
    setSecondsRemainingCount(INITIAL_COUNT);
  };

  const STATUS = {
    STOPPED: (
      <b>
        <a type="button" onclick={handleStart}>
          Resend otp
        </a>
      </b>
    ),
  };
  const [state, setstate] = useState(STATUS.STOPPED);
  useInterval(
    () => {
      if (secondsRemainingCount > 0) {
        setSecondsRemainingCount(secondsRemainingCount - 1);
      } else {
        setstate(STATUS.STOPPED);
      }
    },
    state === STATUS.STARTED ? 1000 : null
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  return (
    <div>
      {state === STATUS.STARTED ? (
        <div>
          Resend Otp<b> {twoDigits(minutesToDisplay)}</b>{" "}
        </div>
      ) : (
        state
      )}
    </div>
  );
};

export default Counter;
