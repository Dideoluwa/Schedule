import { useState, useEffect } from 'react'
import Calender from './components/Calender'
import './App.css'
import sound from './assets/alarm.wav'
import { useNavigate } from 'react-router-dom'
import { Route, Routes, useLocation } from 'react-router'
import Form from './components/Form'
import Schedule from './components/Schedule'
import SuccessPage from './components/SuccessPage'


function App() {
  let [isActive, setIsActive] = useState(false)
  let [date, setDate] = useState(new Date())
  let [timer, setTimer] = useState('00:00')
  let [soundPlay, setSoundPlay] = useState(false)
  let [currTime, setCurrTime] = useState('')
  let [currDate, setCurrDate] = useState('')
  let [dates, setDates] = useState('')
  let [show, setShow] = useState(false)
  let [email, setEmail] = useState('')
  let { pathname } = useLocation()
  let demo = new Audio(sound)
  let time = ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
  useEffect(() => {
    const timers = setInterval(() => {
      let dateSet = new Date()
      let h = dateSet.toLocaleString('en-US', { hour: 'numeric', hour12: false, });
      let m = dateSet.toLocaleString('en-US', { minute: '2-digit', });
      let mnth = dateSet.toLocaleString('en-US', { month: 'long' })
      let dateNums = dateSet.getDate()
      let years = dateSet.getFullYear()

      let month = date.toLocaleString('en-US', { month: 'long' })
      let dateNum = date.getDate()
      let year = date.getFullYear()
      m = (m < 10) ? "0" + m : m;
      setCurrTime(`${h}:${m}`)
      setDates(`${dateNum} ${month}, ${year}.`)
      setCurrDate(`${dateNums} ${mnth}, ${years}.`)
    }, 1000);

    return () => {
      clearInterval(timers);
    };
  }, [date]);

  useEffect(() => {
    if (timer === currTime && currDate === dates) {
      setSoundPlay(true)
    } else {
      setSoundPlay(false)
    }
    // console.log(timer === currTime && currDate === dates)
  }, [timer, date, currTime, currDate, dates])
  if (soundPlay) {
    demo.play();
  }
  let navigate = useNavigate()
  let navigateBackHAndler = () => {
    if (pathname === '/final') {
      navigate('/form')
    } else {
      navigate('/')
    }
  }

  let navigateForwardHAndler = () => {
    if (pathname === '/form') {
      // console.log(nameInput)
      navigate('/final')
    } else {
      navigate('/form')
    }
  }


  return (
    <div className='main__wrapper1'>
      <div className='calendar-container2'>
        <div className='calendar-container1'>
          <Routes>
            <Route path='/' element={<Calender onClickFor={navigateForwardHAndler} onClick={navigateBackHAndler} disabled={isActive} show={show} dates={dates} timer={timer} />}>
              <Route path='/' element={<Schedule show={show} setShow={setShow} isActive={isActive} setIsActive={setIsActive} timer={timer} setTimer={setTimer} time={time} date={date} onChange={setDate} />} />
              <Route path='form' element={<Form email ={email} setEmail ={setEmail} onClick={navigateForwardHAndler} setIsActive={setIsActive} />} />
            </Route>
            <Route path='/final' element={<SuccessPage email ={email}  dates={dates} timer={timer} />} />
          </Routes>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default App

