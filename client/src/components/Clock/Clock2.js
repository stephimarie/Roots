import {useState, useEffect} from "react";
import './style.css';
import moment from "moment-timezone";
import Timezone from "./Timezone";

const Clock2 = () => {
    const [date,setDate] = useState(moment())
    
    useEffect(() => {
        const time = setInterval(getCurrentTime, 1000)
        return () => {
            clearInterval(time)
            }
    }, [])
    const getCurrentTime = () => {
        setDate(moment())
    }    
    
    return (
        <div id="timezones" className="row">
            <Timezone name="San Francisco" date={date.tz('America/Los_Angeles').format('LTS')}/>
            <Timezone name="New York" date={date.tz('America/New_York').format('LTS')}/>
            <Timezone name="London" date={date.tz('Europe/London').format('LTS')}/>
            <Timezone name="Moscow" date={date.tz('Europe/Moscow').format('LTS')}/>
            <Timezone name="Tokyo" date={date.tz('Asia/Tokyo').format('LTS')}/>
            <Timezone name="Sydney" date={date.tz('Australia/Sydney').format('LTS')}/>
        </div>
    )
}

export default Clock2
