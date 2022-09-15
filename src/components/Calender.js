import React, { useState } from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import './Calender.css'
import DateInfo from './DateInfo'
import Info from './Info'
import Time from './Time'
import { Route, Routes } from 'react-router'
import Form from './Form'

function Calender(props) {
    let [show, setShow] = useState(false)
    return (
        <div className='main__wrapper'>
            <div className="calendar-container">
                <Info dates={props.dates} show={show} timer={props.timer} />
                <Routes>
                    <Route path='/' element={
                        <div className='container'>
                            <div>
                                <div className="calendar-container__inner">
                                    <div className="calendar-container__header">
                                        <DateInfo date={props.date} />
                                    </div>
                                    <Calendar minDate={new Date()} onChange={props.onChange} value={props.date} />
                                </div>
                            </div>
                            <div>
                                <Time setShow={setShow} setTimer={props.setTimer} setIsActive={props.setIsActive} time={props.time} />
                            </div>
                        </div>
                    } />
                    <Route path = '/form' element ={<Form />}/>
                </Routes>
            </div>
        </div>
    )
}

export default Calender