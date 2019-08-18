import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import IntervalSet from './TimeComp'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lat: null,
            long: null,
            error:null
        } 
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            function(pos){
                this.setState({
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                })
            }.bind(this),
            (err)=>this.setState({error: err.message})    
        )
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    helperRender(){
        if(!this.state.error && !this.state.lat){
            return (
                <Spinner>Please Allow Your Location Permission</Spinner>
            )
        }
        if (!this.state.error){
            return(
                <div>
                    <SeasonDisplay lat={this.state.lat} long={this.state.long}  />
                </div>
        )}
        return <p>Error: {this.state.error}</p>
    }
    render(){
        return (
            <div className="boeder" style={{border:'5px black solid'}}>
                {this.helperRender()}
                <IntervalSet/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)