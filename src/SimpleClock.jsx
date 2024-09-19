import React, { useState, useEffect } from "react";

function CLock() {
  const [time, setTime] = useState();

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
         clearInterval(intervalId)
    }

  }, []);


  const formatTime = (e) => {
     let hours = time.getHours()
     const minutes = time.getMinutes()
     const seconds = time.getSeconds()
     const mirediem = hours>= 12 ? "PM" :"AM"

     hours = hours % 12 || 12

     return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)}  ${mirediem}`
  };

  const padZero = (number) => {
     return (number < 10 ? "0" : "") + number
  };
  return (
    <>
      <div
        className="clock-container"
        style={{
          fontSize: "5vh",
          fontWeight: "bolder",
          fontFamily: "monospace",
        }}
      >
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default CLock;
