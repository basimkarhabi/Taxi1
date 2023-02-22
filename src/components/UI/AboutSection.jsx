import React from 'react';
import "../../styles/about-section.css";
import {Container,Row,Col} from "reactstrap";

const AboutSection = ({aboutClass}) => {
  return (
    <section className="about__section" style={aboutClass==="aboutPage" ? {marginTop:"0px"}:{MarginTop:"280px"}}>
        <Container>
        <h2 className="section__subtitle text-center ">About Us</h2>
        <h2 className="section__title text-center"> ATIK Transportation-INC</h2>
            <Row>
                <Col lg="6" md="6">
                {/*  <div className="about__section-content " >
                    <p className="section__description"> with our Service s you will : </p>
                    </div>*/}
                  
                    <div className="about__section-item d-flex align-items-start mt-5">           
                      <p className="section__description d-flex align-items-start gap-2">
                      <i class="ri-checkbox-circle-line "></i> 
                      City transfer :Ivan take you and stay with you at all Orange County and                               Los Angeles city
                      </p>
                      <p className="section__description d-flex align-items-start gap-2">
                        <i class="ri-checkbox-circle-line"></i> 
                        Fast and easy booking you can call me at my phone number is <br/> 1 714-873-2944 
                        <br/>or<br/> 1949-998-1977
                      </p>
                    </div>    
                </Col>

                <Col lg="6" md="6">
                  <div className="about__img">
                    <img src="https://i.ibb.co/bzfmHSw/Cadillac-xtc.jpg" alt="" className="w-100 mb-5" />
                  </div>
                </Col> 

            </Row>
        </Container>      
    </section>
  )
}

export default AboutSection