import React from "react";

class Description extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<h1>
								{" "}
								What is{" "}
								<a
									style={{
										fontFamily: "Shrikhand, cursive",

										color: "#F48733"
									}}
								>
									Fomo
								</a>?{" "}
							</h1>
							<br />
							Lorem ipsum dolor amet stumptown street art seitan,
							next level tofu food truck shaman chia chambray
							marfa. Organic thundercats tbh hot chicken raclette
							before they sold out tilde artisan jianbing YOLO
							irony hell of. Retro godard succulents synth
							franzen. Knausgaard taxidermy cardigan photo booth
							viral, williamsburg cloud bread pabst. 8-bit deep v
							keytar farm-to-table YOLO unicorn kombucha synth
							lyft slow-carb leggings craft beer artisan.
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center"
							}}
							className="col-sm-6"
						>
							<img src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=cb1acdd8302b788f7200fedffe927907" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Description;
