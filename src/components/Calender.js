import React from 'react'
import './Calender.css'
import Info from './Info'
import { Outlet } from 'react-router'
// import Nav from './Nav'

function Calender(props) {
    return (
        <div className='main__wrapper'>
            <div className="calendar-container">
                <div className='calender__info'>
                    <Info dates={props.dates} show={props.show} timer={props.timer} />
                </div>
                <div>
                   <Outlet /> 
                </div>
                
            </div>
        </div>
    )
}

export default Calender