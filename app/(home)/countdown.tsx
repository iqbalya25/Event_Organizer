"use client";
import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const [counter, setCounter] = useState(60);
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else {
            if (hours > 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              return 59;
            } else {
              if (days > 0) {
                setDays((prevDays) => prevDays - 1);
                setHours(23);
                setMinutes(59);
                return 59;
              } else {
                clearInterval(timer);
                return 0;
              }
            }
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, minutes, hours, days]);

  return (
    <div>
      <h1 className="text-5xl lg:text-7xl font-bold bg-red-600 text-white flex justify-center text-center px-32 py-16">
        KUKIVENT 2024
      </h1>
      <div className="grid grid-flow-row lg:grid-flow-col gap-16 text-center auto-cols-max justify-center bg-red-600 text-white px-32 py-16">
        <div className="flex flex-col">
          <span className="countdown font-mono flex justify-center text-6xl md:text-8xl font-bold">
            <span style={{ "--value": days } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono flex justify-center text-6xl md:text-8xl  font-bold">
            <span style={{ "--value": hours } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono flex justify-center text-6xl md:text-8xl font-bold">
            <span style={{ "--value": minutes } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono flex justify-center text-6xl md:text-8xl font-bold">
            <span style={{ "--value": counter } as React.CSSProperties}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
