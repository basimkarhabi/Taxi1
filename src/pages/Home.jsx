import React from 'react'
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import AboutSection from '../components/UI/AboutSection.jsx';
import ServicesList from '../components/UI/ServicesList.jsx';
//import {Helmet} from 'react-helmet-async'
// import Cardscar from '../components/UI/Cardscar.jsx'
import { eventsData } from "../assets/data/serviceData.js";
import "../styles/home.css"
import CardCar2 from "../components/UI/CardCar2.jsx"

const Home = () =>
{
  return <Helmet title='home'>
    <title>home</title>
    <meta name="description" content="transposition in los Angeles " />
    <section className="p-0 hero__slider-section">
      <link rel='canonical' href='https://www.atiketransportation.com/' />
      <HeroSlider />
    </section>
    <AboutSection />
    <section>
      <CardCar2 data={eventsData} />
    </section>

    <section >
      {/* <Cardscar data={eventsData} /> */}

    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section__subtitle">see our</h6>
            <h2 className="section__title">Popular Services</h2>
          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home