import './SeasonDisplay.css'
import React from 'react'
class SeasonDisplay extends React.Component{
    seasonConfig = {
        summer:{
            text:"Let's go to the beach",
            icon:'sun'
        },
        winter:{
            text:"burr!! it's cold",
            icon:'snowflake'
        }
    }
    month = new Date().getMonth()
    getSeason(lat, month){
        if(month>2 && month<9){
            return lat>0 ? 'summer': 'winter'
        }
        else{
            return lat>0 ? 'winter':'summer'
        }
    }
    helperRender(){
        const Season = this.getSeason(this.props.lat, this.month)
        const{text, icon} = this.seasonConfig[Season]
        return (
            <div className={`season-display ${Season}`}>
                <i className={`${icon} icon massive iconLeft`}/>
                <h1>{text}</h1>
                <i className={`${icon} icon massive iconRight`}/>
            </div>
        )

    }
    render(){
        return(
            <div>
                {this.helperRender()}
            </div>
        )
    }
}
export default SeasonDisplay