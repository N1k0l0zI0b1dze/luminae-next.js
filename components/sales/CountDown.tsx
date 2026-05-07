"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  total: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownProps = {
  targetTime: number;
};

const getTimeLeft = (target: number): TimeLeft => {
  const total = target - Date.now();

  return {
    total,
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
};

export default function CountDown({ targetTime }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetTime),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="text-lg font-extrabold flex items-center">
      <span className="text-black">
        {String(timeLeft.hours).padStart(2, "0")}
      </span>

      <span className="text-gray-400 font-medium mx-1.5">:</span>

      <span className="text-black">
        {String(timeLeft.minutes).padStart(2, "0")}
      </span>

      <span className="text-gray-400 font-normal mx-1.5">:</span>

      <span className="text-black">
        {String(timeLeft.seconds).padStart(2, "0")}
      </span>
    </div>
  );
}
