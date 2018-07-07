import React from "react";
import styled from "styled-components";
import axios from "axios";
import config from "../../config.js";
import Transition from "react-transition-group/Transition";
import Nav from "./Nav.jsx";
import SignIn from "./SignIn.jsx";
import Carousel from "./Carousel.jsx";
import Columns from "./Columns.jsx";
import EventListings from "./EventListings.jsx";
import Footer from "./Footer.jsx";
import Description from "./Description.jsx";

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1 {
		color: #89c6e5;
		font-family: Shrikhand, cursive;
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
			eventlisting: false
		};
		this.getEventInfo = this.getEventInfo.bind(this);
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
			});
	}

	render() {
		return (
			<div>
				<Nav getEventInfo={this.getEventInfo} />
				<SignIn />
				{this.state.carousel ? <Carousel /> : null}
				<Body className="container">
					{this.state.description ? <Description /> : null}
					{this.state.columns ? <Columns /> : null}
					{this.state.eventlisting ? (
						<EventListings events={this.state.events} />
					) : null}
				</Body>
				<Footer />
			</div>
		);
	}
}

module.exports = App;
