import React from "react";
import styled from "styled-components";

const Inner = styled.div.attrs({
	className: "carousel-inner"
})`
	height: 500px;
`;

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					/>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="1"
					/>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="2"
					/>
				</ol>
				<Inner>
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=e3acfc60a9cc50174fdedc47f3349fb0"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=c3d8c0a0ad9cfc6dda19f23308da0299"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjI4MDg3fQ&s=7916886e744ed9748654955001372ec7"
							alt="Third slide"
						/>
					</div>
				</Inner>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

module.exports = Carousel;
