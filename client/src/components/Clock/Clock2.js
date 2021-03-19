import {useState, useEffect} from "react";
import './style.css';
import moment, { momentTimezone } from "moment";
// import { momentTimezone } from "momentTimezone";

const Clock2 = () => {
    // const [date,setDate] = useState(new Date())
    // useEffect(() => {
    //     let timer= setInterval(()=>{
    //         setDate(new Date())
    //         console.log(date)
    //     },3000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

// const timezones = moment().format('LTS');
//     const SF = 
    
    return (
        <div id="timezones" className="row">
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        San Francisco

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        New York

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        London

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        Moscow

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        Tokyo

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"5px", marginLeft:"10px", marginRight:"10px", borderRadius:"10px"}}>
                <div className="card-panel black">
                    <span className="white-text">
                        Sydney

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Clock2
