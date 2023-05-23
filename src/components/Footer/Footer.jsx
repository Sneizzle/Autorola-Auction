import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link} from "react-router-dom";
import '../../styles/footer.css';

const quickLinks = [
    {
        path: '/about',
        display:'About'
    },
    {
        path: '/#',
        display: 'Privacy Policy'
    },
    {
        path: '/cars',
        display: 'Car Listing'
    },
    {
        path: '/blogs',
        display: 'Blogs'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/about',
        display: 'About'
    },

]

const Footer = () => { 

    const date = new Date()
    const year = date.getFullYear()
	return ( <footer className="footer">
               <Container>
                   <Row>
                       <Col lg="4" md="4" sm="12">
                           <div className="logo footer__logo">
                               <h1>
                                   <Link to="/home" className=" d-flex align-items-center gap-2">
                                       <i class="ri-car-line"></i>
                                       <span>
                                           Autorola <br/> Bil Auktion
                                       </span>
                                   </Link>
                               </h1 >
                           </div>
                           <p className="footer__logo-content">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           </p>
                       </Col>

                       <Col lg="2" md="4" sm="6">
                           <div className="mb-4">
                               <h5 className="footer__link-title">Quick Links</h5>
                               <ListGroup>
                                   {quickLinks.map((item, index) => (
                                        <ListGroupItem key={index} className="p-0, mt-3, quick__link">
                                            <Link to={item.path}>{item.display}</Link>
                                       </ListGroupItem>
                                   ))}
                        </ListGroup>
                    </div>
                       </Col>
                            <Col lg="3" md="4" sm="6">
                                <div className="md-4">
                        <h5 className="footer__link-title mb-4">Hovedkontor</h5>
                        <p className="office__info">Odense, Denmark</p>
                        <p className="office__info">Telefon: +45 93870420</p>
                        <p className="office__info">Email: Jkla40320@edu.ucl.dk</p>
                        <p className="office__info">Kontortid 10:00 - 19:00</p>
                    </div>
                </Col>

                <Col lg="3" md="4"sm="12">
                    <div className="mb-4">
                        <h5 className="footer__link-title">Nyhedsbrev</h5>
                        <p className="section__description-offer">Tilmeld dig vores nyhedsbrev</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Email" />
                            <span>
                                <i class="ri-send-plane-line"></i>
                            </span>
                        </div>
                    </div>
                </Col>


                <Col lg="12">
                    <div className="footer__bottom">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                        <i class="ri-copyright-line"></i>Copyright {year}, Developed by John Lange. All rights reserved.
                        </p>

                    </div>

                </Col>
            </Row>
        </Container>
    </footer >
    );
};

export default Footer;
