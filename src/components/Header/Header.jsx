import React from 'react';

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/header.css';

const Header = () => {
	return ( <header className="header">
		{ /* ------ Header Top ------ */}
		<div className="header_top">
			<Container>
				<Row>
					<Col lg='6' md='6' sm='6'>
						<div className="header_top_left">
							<span>Need Help?</span>
							<span className="header__top__help">
							<i class="ri-phone-fill"></i> +1-202-555-0149
							</span>
						</div>
					</Col>

					<Col lg='6' md='6' sm='6'>
						<div className="header__top__right">
							<Link to='#'> <i class="ri-login-circle-line"></i> Login
							</Link>

							<Link to='#'> <i class="ri-login-circle-line"></i> Register
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</header>
	);
};

export default Header;
