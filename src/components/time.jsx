import { useEffect } from "react";
import { useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h3 className="lead">
      {" "}
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}{" "}
    </h3>
  );
}

export default Time;
