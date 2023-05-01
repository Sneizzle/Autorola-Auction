import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutIMG from "../../Assets/cars-img/car-1.PNG";


const AboutSection = () => {
    return (
        <section>

        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className="about__section-content">
                        <h4 className="section__subtitle">Om os</h4>
                        <h2 className="section__title">Velkommen til Autorolas Bilauktion</h2>
                        <p className="section__description">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="about__section-item d-flex align-items-center">

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </Col>

                        <Col lg="6" md="6">
                      <div className="about__img">
                        <img src={aboutIMG} alt="w-100" />

                        </div>
                    </Col>
            </Row>
        </Container>
           </section>
    );
};
export default AboutSection;