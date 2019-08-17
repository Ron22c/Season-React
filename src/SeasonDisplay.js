import './SeasonDisplay.css'
import React from 'react'
const seasonConfig = {
    summer:{
        text:"Let's go to the beach",
        icon:'sun'
    },
    winter:{
        text:"burr!! it's cold",
        icon:'snowflake'
    }
}
function getSeason(lat, month){
    if(month>2 && month<9){
        return lat>0 ? 'summer': 'winter'
    }
    else{
        return lat>0 ? 'winter':'summer'
    }
}
const SeasonDisplay = (props)=>{
    var month = new Date().getMonth()
    const Season = getSeason(props.lat, month)
    const{text, icon} = seasonConfig[Season]
    return (
        <div className={`season-display ${Season}`}>
            <i className={`${icon} icon massive iconLeft`}/>
            <h1>{text}</h1>
            <i className={`${icon} icon massive iconRight`}/>
        </div>
    )
}
export default SeasonDisplay