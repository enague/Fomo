import React from "react";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
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
									Sign In
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
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">
											Email address
										</label>
										<input
											type="email"
											className="form-control"
											id="exampleInputEmail1"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
										<small
											id="emailHelp"
											className="form-text text-muted"
										>
											We'll never share your email with
											anyone else.
										</small>
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputPassword1">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="exampleInputPassword1"
											placeholder="Password"
										/>
									</div>
									<div className="form-check">
										<input
											type="checkbox"
											className="form-check-input"
											id="exampleCheck1"
										/>
										<label
											className="form-check-label"
											htmlFor="exampleCheck1"
										>
											Check me out
										</label>
									</div>
									<button
										type="submit"
										className="btn btn-primary"
									>
										Submit
									</button>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = SignIn;
