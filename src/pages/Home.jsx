

import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
const Home = () => {
	return <Helmet title='Home'>

		{/*------ herossection ------*/}

		<section className="p-0 hero__slider-section">
			<HeroSlider />

			<div className="hero__form">
				<container>
					<Row className="form__row">
						<Col lg='4' md="4" >
							<div className="find__cars-left">
								<h2>
								Find din bedste bil her
								</h2>
							</div>
						</Col>
						<Col lg="8" md="8" sm="12">
						<FindCarForm></FindCarForm>
						</Col>
						

					</Row>
				</container>
			</div>

		</section>
	</Helmet>
};

export default Home;
