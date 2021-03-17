import React, { Component } from 'react'  
import Clock from 'react-clock';  
import './style.css';  
export class ClockApp extends Component {  
  state = {  
    date: new Date(), 
  }  
  
  componentDidMount() {  
    timer=setInterval(
      () => this.setState({ date: new Date() }),  
      3000  
    );  
  }  
  render() {  
    return (  
      <div className="container">  
        <div className="clock">  
          <Clock 
            value={this.state.date}  
          />  
        </div>  
      </div>  
    )  
  }  
}  
  
export default ClockApp