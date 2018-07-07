import React from "react";
import styled from "styled-components";
import Event from "./Event.jsx";

const Body = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 30px;
`;

class EventListings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1 style={{ padding: "10px" }}> List of Events</h1>
				<Body>
					{this.props.events.map((event, i) => {
						return (
							<Event
								key={i}
								index={i}
								render={this.props.renderEventPage}
								detail={event}
							/>
						);
					})}
				</Body>
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-end">
						<li className="page-item">
							<a className="page-link" href="#">
								Previous
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="">
								1
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="">
								2
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="">
								3
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="">
								Next
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

module.exports = EventListings;
