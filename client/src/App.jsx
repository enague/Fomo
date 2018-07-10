import React from "react";
import styled from "styled-components";
import axios from "axios";
import config from "../../config.js";
import Transition from "react-transition-group/Transition";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import { Route } from "react-router-dom";

import Nav from "./Nav.jsx";
import SignIn from "./SignIn.jsx";
import Carousel from "./Carousel.jsx";
import Columns from "./Columns.jsx";
import EventListings from "./EventListings.jsx";
import Footer from "./Footer.jsx";
import Description from "./Description.jsx";
import EventDetails from "./EventDetails.jsx";
import Profile from "./Profile.jsx";

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: Arial;

	h1 {
		color: #89c6e5;
		font-family: Shrikhand, cursive;
	}

	h2 {
		color: #533a71;
		font-size: 25px;
		font-family: monospace;
	}

	h3 {
		color: #533a71;
		font-size: 20px;
		font-family: monospace;
	}
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			carousel: true,
			description: true,
			columns: true,
			eventlisting: false,
			eventdetails: false,
			index: ""
		};
		this.getEventInfo = this.getEventInfo.bind(this);
		this.renderEventPage = this.renderEventPage.bind(this);
	}

	componentDidMount() {}

	getEventInfo(query) {
		axios
			.get(
				`https://www.eventbriteapi.com/v3/events/search/?token=${
					config.TOKEN
				}&q=${query}`
			)
			.then(results => {
				this.setState({
					events: results.data.events.splice(0, 9),
					carousel: false,
					description: false,
					columns: false,
					eventlisting: true
				});
				if (this.state.eventdetails) {
					this.setState({
						eventdetails: false
					});
				}
			});
	}

	renderEventPage(index) {
		this.setState({
			index: index,
			eventdetails: true,
			eventlisting: false
		});
	}

	render() {
		return (
			<div>
				<Router>
					<Route
						path="/profile/"
						render={() => {
							return <h1>hi from profile</h1>;
						}}
					/>
				</Router>
				<Nav getEventInfo={this.getEventInfo} />
				<SignIn />
				{this.state.carousel ? <Carousel /> : null}
				<Body className="container">
					{this.state.description ? <Description /> : null}
					{this.state.columns ? <Columns /> : null}
					{this.state.eventlisting ? (
						<EventListings
							renderEventPage={this.renderEventPage}
							events={this.state.events}
						/>
					) : null}
					{this.state.eventdetails ? (
						<EventDetails
							event={this.state.events[this.state.index]}
						/>
					) : null}
				</Body>
				<Footer />
			</div>
		);
	}
}

module.exports = App;
