import React from "react";
import { Container, Row, Col,ListGroup,ListGroupItem   } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks=[
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/contact",
    display: "Contact",
  },
]

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return(
    <footer className="footer">

          <Container>
            <Row>
              <Col lg="4" md="4" sm="12" >
              <div className="logo footer__logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    ATIK TRANSPORTATION <br /> INC
                  </span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
              Whole city tour :We can pick up you  to the LAX air port and any place you are .
            </p>
              </Col>
              <Col lg='4' md='4' sm='6' >
              <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                  {quickLinks.map((item,index)=>(
                      <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                          <Link to = {item.path}>{item.display}</Link>
                      </ListGroupItem>
                  ))}
              </ListGroup>
              </div>
              </Col>
              <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">849 SAN REMO,<br/> IRVIEN CALIFORNIA , 92606</p>
              <p className="office__info">CERTIFICATE NO: PSG0042525- TCP B</p>
              <p className="office__info">Phone : 1714-873-2944 <br/></p>
              <p className="office__info">Phone : +949-998-1977</p>
              <p className="office__info">Email: Majatik@yahoo.com</p>
              <p className="office__info">Office Time: 0am - 24pm</p>
            </div>
          </Col>
 
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>
                  Copyright {year}, Developed by
              ATik Transportation2022. All rights reserved.      
              </p>
            </div>
          </Col>

            </Row>
          </Container>   
  </footer>
    
    )  
  
}

export default Footer