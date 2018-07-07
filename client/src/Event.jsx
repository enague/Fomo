import React from "react";
import styled from "styled-components";

class Event extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={
							this.props.detail.logo === null
								? "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=e3acfc60a9cc50174fdedc47f3349fb0"
								: this.props.detail.logo.url
						}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{this.props.detail.name.text}
						</h5>

						<button href="#" className="btn btn-primary">
							Get More Info
						</button>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Event;
