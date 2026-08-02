/* 
Digital Clock

NEW: useEffect

Requirements
Live time
Date
12/24-hour toggle
Greeting (Morning/Afternoon/Evening)
Stop/Start clock
*/
import {useState,useEffect} from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [format,setFormat]=useState(true);

  const hour=time.getHours()
  {hour<12?"good Morning":hour>12 && hour<17 ? "Good Afternoon":"Good Evening"}

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{time.toLocaleTimeString([], { hour12:format  })}</p>
      <p>{hour<12?"good Morning":hour<17 ? "Good Afternoon":hour <22?"Good Evening":"Good Night"}</p>
      <button type="button" value={format} onClick={()=>setFormat(!format)}>Format</button>
    </div>
  );
}
