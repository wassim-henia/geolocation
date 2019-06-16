import React, { Component } from 'react';
import ApiForm from './components/Api_form';
import Localisation from './components/localisation';
import './App.css';
import SimpleMap from './components/Simplemap';



class App extends Component {

    state ={
        ip:'',
        isp:'',
        city:'',
        country:'',
        timezone:'',
        lat:'',
        lon:''
    }

    getIp = async (e)=> {
        e.preventDefault();
        const api = await fetch(`https://api.myip.com`);
        const donne = await api.json();
        console.log(donne);
        this.setState({ip:donne.ip});
    }

    getLocation = async (e)=>{
        e.preventDefault();
        const ip=this.state.ip;
        const api = await fetch (`http://ip-api.com/json/${ip}`);
        const data = await api.json();
        console.log(data);
        this.setState({
            isp:data.isp,
            city:data.city,
            country:data.country,
            timezone:data.timezone,
            lat:data.lat,
            lon:data.lon
        })
    }







  render() {
    return (
      <div className="App">
          <ApiForm getIp = {this.getIp} ip = {this.state.ip} />
          <Localisation getLocation ={this.getLocation}
          isp ={this.state.isp}
          city={this.state.city}
          country={this.state.country}
          timezone={this.state.timezone}
          lat={this.state.lat}
          lon={this.state.lon}
          />
          <SimpleMap lat={this.state.lat}
          lon={this.state.lon} />

      </div>
    );
  }
}

export default App;
