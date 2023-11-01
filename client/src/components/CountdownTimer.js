import React, { useEffect, useState } from 'react';

function CountdownTimer({ book }) {
  const [endDate, setEndDate] = useState(null); // Date fetched from the database
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
   

    // For this example, I'll assume that you've set the endDate manually.
    const endDate = new Date(book.ends);
    console.log(book)
    setEndDate(endDate);

    // Calculate the time remaining and update it every second
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const remainingTime = endDate - currentTime;

      if (remainingTime <= 0) {
        // Timer has ended
        clearInterval(timerInterval);
        setTimeRemaining('Timer has ended');
      } else {
        // Calculate days, hours, minutes, and seconds from remaining milliseconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        setTimeRemaining(formattedTime);
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
  }, [book]);

  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col justify-start space-x-8">
        </div>
        <div className="flex flex-col justify-start space-x-8 text-left ml-10">
          <div className="flex flex-col text-left">
            <p className="font-bold text-[#c90404] text-lg">
              <p>
                {timeRemaining !== null ? timeRemaining : 'Fetching time...'}
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
