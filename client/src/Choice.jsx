import React from "react";
import axios from "axios";
import styled from "styled-components";

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

	render() {
		return (
			<div className="row">
				<div className="col-sm-4">
					<h2>Feeling Indecisive? </h2>

					<button
						onClick={() => this.getChoice()}
						className="btn btn-primary"
					>
						Let FOMO help you decide
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
			</div>
		);
	}
}

module.exports = Choice;
