import { useEffect, useState } from 'react';
import { Flash, TimerContainer, TimerDisplay } from './timer-components';

function formatNumber(a: number): string{
   return ("0" + a).slice(-2);
}
const RecorderTimer = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSec => prevSec + 1);  
    },1000)
    return () =>  {
      clearInterval(interval);
    }
  }, [])
  useEffect(() => {
    if(seconds === 60){
      setSeconds(0);
      setMinutes(prevMin => prevMin + 1)
    }
  }, [seconds])
  return <TimerContainer>
  <Flash/>
  {/* <TimerDisplay>{duration.minutes}:{duration.seconds}</TimerDisplay> */}
  <TimerDisplay>{formatNumber(minutes)}:{formatNumber(seconds)}</TimerDisplay>
  </TimerContainer>;
};

export default RecorderTimer;
