import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #f7f7f7;
`;

class Columns extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1> Getting Started</h1>
							<br />
							<div id="accordion">
								<div className="card">
									<div
										className="card-header"
										id="headingOne"
									>
										<h5 className="mb-0">
											<button
												className="btn btn-link"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Step 1: Create an Account{"  "}
												<i className="fas fa-plus fa-sm" />
											</button>
										</h5>
									</div>

									<div
										id="collapseOne"
										className="collapse"
										aria-labelledby="headingOne"
										data-parent="#accordion"
									>
										<Card className="card-body">
											Lorem ipsum dolor amet la croix
											portland microdosing cronut keytar
											hoodie incididunt hell of et man bun
											occupy. Drinking vinegar
											lumbersexual asymmetrical
											single-origin coffee freegan wolf.
											Artisan yr aliquip ea, kinfolk vice
											meggings flexitarian normcore chia
											direct trade pork belly keytar. In
											do esse, voluptate DIY minim godard
											cloud bread. Quis umami iPhone id
											skateboard drinking vinegar,
											pinterest seitan ethical
											fingerstache affogato mixtape
											taiyaki crucifix viral.
										</Card>
									</div>
								</div>
								<div className="card">
									<div
										className="card-header"
										id="headingTwo"
									>
										<h5 className="mb-0">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												Step 2: Search For Events{"  "}
												<i className="fas fa-plus fa-sm" />
											</button>
										</h5>
									</div>
									<div
										id="collapseTwo"
										className="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordion"
									>
										<Card className="card-body">
											Lorem ipsum dolor amet la croix
											portland microdosing cronut keytar
											hoodie incididunt hell of et man bun
											occupy. Drinking vinegar
											lumbersexual asymmetrical
											single-origin coffee freegan wolf.
											Artisan yr aliquip ea, kinfolk vice
											meggings flexitarian normcore chia
											direct trade pork belly keytar. In
											do esse, voluptate DIY minim godard
											cloud bread. Quis umami iPhone id
											skateboard drinking vinegar,
											pinterest seitan ethical
											fingerstache affogato mixtape
											taiyaki crucifix viral.
										</Card>
									</div>
								</div>
								<div className="card">
									<div
										className="card-header"
										id="headingThree"
									>
										<h5 className="mb-0">
											<button
												className="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												Step 3: Have Fun!{"  "}
												<i className="fas fa-plus fa-sm" />
											</button>
										</h5>
									</div>
									<div
										id="collapseThree"
										className="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordion"
									>
										<Card className="card-body">
											Lorem ipsum dolor amet la croix
											portland microdosing cronut keytar
											hoodie incididunt hell of et man bun
											occupy. Drinking vinegar
											lumbersexual asymmetrical
											single-origin coffee freegan wolf.
											Artisan yr aliquip ea, kinfolk vice
											meggings flexitarian normcore chia
											direct trade pork belly keytar. In
											do esse, voluptate DIY minim godard
											cloud bread. Quis umami iPhone id
											skateboard drinking vinegar,
											pinterest seitan ethical
											fingerstache affogato mixtape
											taiyaki crucifix viral.
										</Card>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<h1> Coming Soon</h1>
							<br />
							Lorem ipsum dolor amet la croix portland microdosing
							cronut keytar hoodie incididunt hell of et man bun
							occupy. Drinking vinegar lumbersexual asymmetrical
							single-origin coffee freegan wolf. Artisan yr
							aliquip ea, kinfolk vice meggings flexitarian
							normcore chia direct trade pork belly keytar. In do
							esse, voluptate DIY minim godard cloud bread. Quis
							umami iPhone id skateboard drinking vinegar,
							pinterest seitan ethical fingerstache affogato
							mixtape taiyaki crucifix viral.
						</div>
						<div className="col">
							<h1> Events in Your Area</h1>
							<br />
							Lorem ipsum dolor amet la croix portland microdosing
							cronut keytar hoodie incididunt hell of et man bun
							occupy. Drinking vinegar lumbersexual asymmetrical
							single-origin coffee freegan wolf. Artisan yr
							aliquip ea, kinfolk vice meggings flexitarian
							normcore chia direct trade pork belly keytar. In do
							esse, voluptate DIY minim godard cloud bread. Quis
							umami iPhone id skateboard drinking vinegar,
							pinterest seitan ethical fingerstache affogato
							mixtape taiyaki crucifix viral.
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Columns;
