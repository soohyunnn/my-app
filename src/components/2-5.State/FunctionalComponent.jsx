import React, { useEffect, useState } from "react";

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  //컴포넌트가 그려지자마자 호출되는 것(마운트 되자마자))
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world! It's Functional</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
