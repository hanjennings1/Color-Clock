import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // Holds the current time; starts as "now" and updates every second
  const [now, setNow] = useState(new Date());

// Update the clock every second; cleanup prevents multiple timers piling up
// if this component re-renders or unmounts
  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Cleanup: stop the timer if the component ever unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock-card">
      <p className="clock-time">{format(now, "h:mm:ss a")}</p>
      <p className="clock-date">{format(now, "EEEE - MMMM do, yyyy")}</p>
    </div>
  );
}

export default App