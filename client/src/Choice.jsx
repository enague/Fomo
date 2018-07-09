import React from "react";
import axios from "axios";
import styled from "styled-components";

const Body = styled.div`
	button {
		background: black;
		color: white;
		height: 40px;
		width: 300px;
		cursor: pointer;
	}
`;

const Answer = styled.div`
	font-size: 50px;
	color: #f48733;
`;

const Suggestion = styled.div`
	font-size: 25px;
	fon-family: monospace;
`;

class Choice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			gif: "",
			present: false
		};
		this.getChoice = this.getChoice.bind(this);
		this.saveEvent = this.saveEvent.bind(this);
	}

	getChoice() {
		axios.get("https://yesno.wtf/api").then(results => {
			this.setState({
				answer: results.data.answer,
				gif: results.data.image,
				present: true
			});
		});
	}

	saveEvent(event) {
		axios
			.post("/add/event", {
				params: {
					value: event
				}
			})
			.then(data => {
				console.log("saved successfully!");
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<Body className="row">
				<div className="col-sm-4">
					<h2 style={{ marginTop: "30px" }}>Feeling Indecisive? </h2>

					<button onClick={() => this.getChoice()}>
						Let FOMO help you decide
					</button>
					<button onClick={() => this.saveEvent(this.props.event)}>
						Save Event
					</button>
					<Answer>{this.state.answer}</Answer>
					<Suggestion>
						{this.state.answer === "no"
							? "You can always go to any of the other events on our page"
							: null}
					</Suggestion>
					<Suggestion>
						{this.state.answer === "yes"
							? "LIVE YOUR BEST LIFE"
							: null}
					</Suggestion>
				</div>
				<div className="col-sm-8">
					{this.state.present ? (
						<img
							style={{
								height: "500px",
								width: "700px"
							}}
							src={this.state.gif}
						/>
					) : null}
				</div>
			</Body>
		);
	}
}

module.exports = Choice;
