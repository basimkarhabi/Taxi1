import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import AboutSection  from '../components/UI/AboutSection';
import {Container,Row,Col} from "reactstrap";
import "../styles/about.css";

const About = () => {
  return <Helmet title = 'about'>
          <title>about</title>
          <meta name="description" content="transportation Taxi in LosAnglos" />
          <link rel ="canonical" href="https://www.atiketransportation.com/about"/>
         <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />
      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src="https://i.ibb.co/VWL3WY0/drive.jpg" alt="drive" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                City transfer :Ivan take you and stay with you at all Orange County and Los Angeles city
                </p> <br/> Fast and easy booking.
                  <br/>Whole city tour.
                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>
                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>714-873-2944</h4>
                    <h4>949-998-1977</h4>

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
    
  
}

export default About