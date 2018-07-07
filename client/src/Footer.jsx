import React from "react";
import styled from "styled-components";

const Contacts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
`;

const Body = styled.div`
	background: black;
	color: white;
`;

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Body>
				<div className="container">
					<div className="row">
						<Contacts className="col-sm-5">
							<a>Use Eventbrite</a>
							<a>How It Works</a>
							<a>For Large & Complex Events</a>
							<a>Pricing</a>
							<a>Content Standards</a>
							<a>Eventbrite Mobile App</a>
							<a>Eventbrite Check-In App</a>
							<a>Eventbrite Spectrum</a>
							<a>Rally - Fun Things To Do</a>
							<a>FAQs</a>
							<a>Sitemap</a>
						</Contacts>
						<Contacts className="col-sm-5">
							<a>Use Eventbrite</a>
							<a>How It Works</a>
							<a>For Large & Complex Events</a>
							<a>Pricing</a>
							<a>Content Standards</a>
							<a>Eventbrite Mobile App</a>
							<a>Eventbrite Check-In App</a>
							<a>Eventbrite Spectrum</a>
							<a>Rally - Fun Things To Do</a>
							<a>FAQs</a>
							<a>Sitemap</a>
						</Contacts>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								padding: "10px"
							}}
							className="col-sm-2"
						>
							<h3> Follow us on </h3>

							<div
								style={{
									display: "flex",
									justifyContent: "space-around",
									padding: "10px"
								}}
							>
								<i className="fab fa-instagram fa-2x" />
								<i className="fab fa-facebook-square fa-2x" />
								<i className="fab fa-youtube fa-2x" />
								<i className="fab fa-twitter fa-2x" />
							</div>
						</div>
					</div>
				</div>
			</Body>
		);
	}
}

module.exports = Footer;
