import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { useHistory, Link } from "react-router-dom";

export default function Timer({url}) {

    let history = useHistory();

    const [Minute, setMinute] = useState(0);
    const [Second, setSecond] = useState(0);
    const [Hour, setHour] = useState(0); 
    const [Time, setTime] = useState(500)
    

    useEffect(() => {
        const interval =  setInterval(function(){
            if(Time != 0){
            setSecond( Time % 60 );
            setMinute(Math.floor((Time/60)%60));
            setHour(Math.floor(Time/60/60));
            setTime(Time=> Time - 1);
            }
            else{
                setSecond(0);
                setMinute(0);
                setHour(0);
                setTime(Time=> 0)
                history.push({
                    pathname: url+"/result",
                    state: {

                    }
                })
            }
        },1000);
        return () => clearInterval(interval);
    },[Time])


    return (
        <div className="timer-container">
            <div className="timer-wrapper">
                <div className="time">
                    <span className="hour">{Hour}</span>
                    <span className="minute">:{Minute}</span>
                    <span className="second">:{Second}</span>
                </div>
            </div>
        </div>
    );
}

