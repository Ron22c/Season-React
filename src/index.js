import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
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
    render(){
        console.log('render')
        if(!this.state.error && !this.state.lat){
            return <h1>Loading...</h1>
        }
        if (!this.state.error){
            return(
                <div>
                    <SeasonDisplay lat={this.state.lat} long={this.state.long}  />
                </div>
        )}
        return <p>Error: {this.state.error}</p>
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)