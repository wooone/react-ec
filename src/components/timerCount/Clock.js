import { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Aug 28, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <>
      <div className="d-flex items-center gap-3 justify-center md:justify-start">
        <div className="d-flex items-center gap-3">
          <div className="text-center">
            <h1 className="text-white text-xl md:text-3xl mb-1">{days}</h1>
            <h5 className="text-white text-sm">Days</h5>
          </div>
          <span className="text-white text-lg">:</span>
        </div>

        <div className="d-flex items-center gap-3">
          <div className="text-center">
            <h1 className="text-white text-xl md:text-3xl mb-1">{hours}</h1>
            <h5 className="text-white text-sm">Hours</h5>
          </div>
          <span className="text-white text-lg">:</span>
        </div>

        <div className="d-flex items-center gap-3">
          <div className="text-center">
            <h1 className="text-white text-xl md:text-3xl mb-1">{minutes}</h1>
            <h5 className="text-white text-sm">Minutes</h5>
          </div>
          <span className="text-white text-lg">:</span>
        </div>

        <div className="d-flex items-center gap-3">
          <div className="text-center">
            <h1 className="text-white text-xl md:text-3xl mb-1">{seconds}</h1>
            <h5 className="text-white text-sm">Seconds</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
