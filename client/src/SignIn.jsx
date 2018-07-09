import React from "react";
import styled from "styled-components";

const Create = styled.a`
	cursor: pointer;
`;

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signIn: true,
			create: false
		};
		this.toggleSignIn = this.toggleSignIn.bind(this);
	}

	toggleSignIn() {
		this.setState(state => ({
			signIn: !state.signIn,
			create: !state.create
		}));
	}

	render() {
		return (
			<div>
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-dialog-centered"
						role="document"
					>
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="exampleModalLongTitle"
								>
									Sign In or{" "}
									<Create
										style={{ color: "#f48733" }}
										onClick={() => {
											this.toggleSignIn();
										}}
									>
										Create an Account
									</Create>
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							{this.state.signIn ? (
								<div className="modal-body">
									<form action="/login" method="post">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												Email address
											</label>
											<input
												type="text"
												name="username"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">
												Password
											</label>
											<input
												type="password"
												name="password"
												className="form-control"
												id="exampleInputPassword1"
												placeholder="Password"
											/>
										</div>

										<a
											href="/auth/google"
											style={{ float: "right" }}
											type="submit"
											value="Log In"
											className="btn btn-primary"
										>
											Submit
										</a>
									</form>
								</div>
							) : null}
							{this.state.create ? (
								<div className="modal-body">
									<form>
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">
												New Email
											</label>
											<input
												type="email"
												className="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleInputPassword1">
												New Password
											</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword1"
												placeholder="Password"
											/>
											<label htmlFor="exampleInputPassword2">
												Confirm Password
											</label>
											<input
												type="password"
												className="form-control"
												id="exampleInputPassword2"
												placeholder="Password"
											/>
										</div>
										<button
											style={{ float: "right" }}
											type="submit"
											className="btn btn-primary"
										>
											Submit
										</button>
									</form>
								</div>
							) : null}
							<div className="modal-footer" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = SignIn;
