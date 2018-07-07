import React from "react";
import styled from "styled-components";
import Event from "./Event.jsx";

const Body = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

class EventListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1> List of Events</h1>
				<Body>
					{this.props.events.map((event, i) => {
						return <Event key={i} detail={event} />;
					})}
				</Body>
			</div>
		);
	}
}

module.exports = EventListings;
