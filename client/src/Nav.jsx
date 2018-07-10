import React from "react";
import styled from "styled-components";

const Body = styled.div`
	a {
		color: white;
	}
`;

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			query: e.target.value
		});
	}

	render() {
		return (
			<div
				style={{ background: "black" }}
				className="navbar navbar-expand-lg "
			>
				<Body className="container">
					<a
						style={{
							fontFamily: "Shrikhand, cursive",
							fontSize: "50px",
							color: "#F48733"
						}}
						onClick={() => location.reload()}
						className="navbar-brand"
						href="#"
					>
						FOMO
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<i className="fas fa-home fa-lg" />
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									data-toggle="modal"
									data-target="#exampleModalCenter"
									href="#"
								>
									<i className="fas fa-user fa-lg" />
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link "
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<i className="fas fa-calendar-alt fa-lg" />
								</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input
								className="form-control mr-sm-2"
								type="search"
								onChange={e => this.handleChange(e)}
								placeholder="Search events..."
								aria-label="Search"
							/>
						</form>
						<button
							className="btn btn-outline-primary "
							onClick={() => {
								this.props.getEventInfo(this.state.query);
							}}
						>
							<i className="fas fa-search" />
						</button>
					</div>
				</Body>
			</div>
		);
	}
}

module.exports = Nav;
