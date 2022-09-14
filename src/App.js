import { useState, useEffect } from 'react'
import Calender from './components/Calender'
import Nav from './components/Nav'
import './App.css'
import { Route, Routes } from 'react-router'
import sound from './assets/alarm.wav'



function App() {
  let [isActive, setIsActive] = useState(false)
  let [date, setDate] = useState(new Date())
  let [timer, setTimer] = useState('00:00')
  let [soundPlay, setSoundPlay] = useState(false)
  let [currTime, setCurrTime] = useState('')
  let demo = new Audio(sound)
  let time = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
  useEffect(() => {
    const timers = setInterval(() => {
      let dates = new Date()
      let h = dates.toLocaleString('en-US', { hour: 'numeric', hour12: false, });
      let m = dates.toLocaleString('en-US', { minute: '2-digit', });
      m = (m < 10) ? "0" + m : m;
      setCurrTime(`${h}:${m}`)
    }, 1000);

    return () => {
      clearInterval(timers);
    };
  }, []);

  useEffect(() => {
    if (timer === currTime) {
      setSoundPlay(true)
    } else {
      setSoundPlay(false)
    }
    console.log(timer)
    console.log(currTime)
    console.log(timer === currTime)
  }, [timer, date, currTime])
  if (soundPlay) {
    demo.play();
  }

  return (
    <div className='main__wrapper1'>
      <div className='calendar-container1'>
        <Routes>
          <Route path='/' element={<Calender setIsActive={setIsActive} timer={timer} setTimer={setTimer} time={time} date={date} onChange={setDate} />} />
        </Routes>
        <Nav isActive={isActive} />
      </div>
    </div>
  )
}

export default App

