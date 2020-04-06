import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
//import reducerWeather from '../reducers/reducer_weather';

class WeatherList extends Component{
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => temp - 273);
		const pressure = cityData.list.map((weather) => weather.main.pressure);
		const humidity = cityData.list.map((weather) => weather.main.humidity);
		const { lon, lat} = cityData.city.coord;
		return(
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td>
					<Chart data={temps} color="red" unit="C"/>
				</td>
				<td>
					<Chart data={pressure} color="green" unit="hPa"/>
				</td>
				<td>
					<Chart data={humidity} color="orange" unit="%"/>
				</td>
			</tr>
		);
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temreture C</th>
						<th>Pressure hPa</th>
						<th>Humidity %</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);