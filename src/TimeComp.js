import React from 'react'
class IntervalSet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time:new Date().toLocaleString()
        }
    }
    componentDidMount(){
        setInterval(
            ()=>{
                this.setState({time:new Date().toLocaleString()})
            },1000)
    }
    componentDidUpdate(){
        console.log(this.state.time)
    }
    render(){
        return(
            <div>The time is : {this.state.time}</div>
        )
    }
}
export default IntervalSet