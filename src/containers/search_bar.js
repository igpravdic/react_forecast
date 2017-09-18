import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({ term: event.target.value})
		//event.preventDefault();
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term:'' });
	}

	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit} action="" className="input-group">
					<input 
						placeholder="Get a five day forecast in your favorite cities"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
						type="text"
					/>
					<span className="input-group-btn">
						<button className="btn-secondary btn">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);