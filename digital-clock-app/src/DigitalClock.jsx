import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  function formatDate(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";

    return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(seconds)} ${meridiem}`;

  }

  //after every second it displayes new Date()
  useEffect(() => {
    const interval = setInterval(() => {
       setTime(new Date());
    }, 1000);

    //without clean up function, When your component unmounts (gets removed from the DOM),
    //  the setInterval continues running in the background.
    return () => {
      clearInterval(interval);
    }
  }, [])

  //to add leading 0s before single digit
  function padZeros(number){
    return(number < 10 ? "0" : "") + number;
  }
  return (
    <>
    <div className='clock-container'>
      <div className="clock">
        <span>{formatDate()}</span>
      </div>
    </div>
    </>
  )
}
