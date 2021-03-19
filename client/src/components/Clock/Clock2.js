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
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        San Francisco

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        New York

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        London

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        Moscow

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        Tokyo

                    </span>
                </div>
            </div>
            <div className="col s3 m6" style={{background:"rgba(255, 255, 255, 0.250)", marginTop:"10px", marginLeft:"10px", marginRight:"10px", borderRadius:"5px", paddingTop:"5px"}}>
                <div style={{backgroundColor:"rgba(0, 0, 0, 0)"}} className="card-panel ">
                    <span className="black-text">
                        Sydney

                    </span>
                </div>
            </div>
        </div>
    )
}

export default Clock2
