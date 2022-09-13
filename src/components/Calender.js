import React, { useState } from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import './Calender.css'
import DateInfo from './DateInfo'
import Info from './Info'
import Time from './Time'

function Calender(props) {
 let [show , setShow] = useState(false)
    return (
        <div className='main__wrapper'>
            <div className="calendar-container">
                <Info show = {show} timer= {props.timer} date={props.date} />
                <div className="calendar-container__inner">
                    <div className="calendar-container__header">
                        <DateInfo date={props.date} />
                    </div>
                    <Calendar minDate= {new Date()} onChange={props.onChange} value={props.date} />
                </div>
                <Time setShow = {setShow} setTimer={props.setTimer} setIsActive={props.setIsActive} time={props.time} />
            </div>
        </div>
    )
}

export default Calender