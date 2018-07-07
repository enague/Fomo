import React from "react";
import styled from "styled-components";
// import EventMap from "./EventMap.jsx";
import Choice from "./Choice.jsx";
import ReactTooltip from "react-tooltip";

class EventDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ padding: "50px" }} className="container">
				<img
					style={{ height: "500px", width: "700px" }}
					src={
						this.props.event.logo === null
							? "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=e3acfc60a9cc50174fdedc47f3349fb0"
							: this.props.event.logo.original.url
					}
				/>
				<h1>{this.props.event.name.html}</h1>
				<div style={{ display: "flex", padding: "5px" }}>
					<div>
						{this.props.event.is_free ? (
							<div>
								<a data-tip data-for="free">
									<i className="fab fa-creative-commons-nc fa-2x" />
								</a>
								<ReactTooltip
									id="free"
									type="dark"
									effect="float"
								>
									<span>Free Event</span>
								</ReactTooltip>
							</div>
						) : (
							<div>
								<a data-tip data-for="pay">
									<i className="fas fa-dollar-sign fa-2x" />
								</a>
								<ReactTooltip
									id="pay"
									type="dark"
									effect="float"
								>
									<span>Not Free</span>
								</ReactTooltip>
							</div>
						)}
					</div>
					<div>
						{this.props.event.online_event ? (
							<div>
								<a data-tip data-for="laptop">
									<i className="fas fa-laptop fa-2x" />
								</a>
								<ReactTooltip
									id="laptop"
									type="dark"
									effect="float"
								>
									<span>Online Event</span>
								</ReactTooltip>
							</div>
						) : null}
					</div>
				</div>
				<h3>
					Reserve Tickets Here:<br />
				</h3>
				<a href={this.props.event.url}>{this.props.event.url} </a>

				<div>{this.props.event.description.text}</div>
				<Choice />
			</div>
		);
	}
}

module.exports = EventDetails;
