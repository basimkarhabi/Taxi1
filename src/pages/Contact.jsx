import React , {useState}from 'react'
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
    console.log(successMsg)

  const {register,formState: { errors },handleSubmit,reset} = useForm();

  const submit = (data,e) => {
          e.preventDefault();
          console.log(data);
          setSuccessMsg("your form is sending ")
            emailjs.send(REACT_APP_SERVICE_ID,
              REACT_APP_TEMPLATE_ID, 
                data,
              REACT_APP_PUBLIC_KEY )
              .then((result) => {
                  console.log(result.text);
                  if (result.text === "OK"){
                    reset();
                    setSuccessMsg("your form is Send")
                    }

              }, (error) => {

                  console.log(error.text);
              });
    };

  return (
    <Helmet title="contact">
      <title>contact</title>
          <meta name="description" content="transportation Taxi in LosAnglos" />
          <link rel ="canonical" href="https://www.atiketransportation.com/contact"/>
        <CommonSection title="contact" />
          <section>
            <Container>
              <Row>
                <Col lg="7" md="6">
                  <h6 className="fw-bold mb-4">Get In Touch</h6>
                  <Form onSubmit={handleSubmit(submit)} md={6}>
                    <FormGroup className="booking__form d-inline-block me-4 mb-4" >
                        <input type="text" placeholder="First Name" id="firstName"
                          {...register("firstName", 
                            {required: "Enter first Name" , message:"Enter your first Name error message"},  
                          )}   />
                        {errors.firstName && (<p className="errorMsg">{errors.firstName.message}</p>)}
                    </FormGroup>

                    <FormGroup className="booking__form d-inline-block me-4 mb-4">
                        <input type="email" placeholder="Email" id="email"
                          {...register("email", 
                          {required: "Email is required.", pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                                      message: "Email is not valid."}})} />
                           {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </FormGroup>

                    <FormGroup className="contact__form mb-2 me-1 ">
                        <textarea
                            rows={5}
                            type="textarea"
                            className="textarea "
                            placeholder="Write"
                            id="message"
                            {...register("message")}>
                          </textarea>
                    </FormGroup>

                    <button className=" contact__btn" type="submit" value="Send" >
                      Send Message
                    </button>
                    {<div> {successMsg} </div>}
                  </Form>
                </Col>
                <Col lg="5" md="5">
                  <div className="contact__info">
                    <h6 className="fw-bold">Contact Information</h6>
                    <p className="section__description mb-0">
                    849 SAN REMO,IRVIEN CALIFORNIA , 92606
                    </p>
                    <div className=" d-flex align-items-center gap-2">
                      <h6 className="fs-6 mb-0">Phone1:</h6>
                      <p className="section__description mb-0">714-873-2944</p>
                    </div>
                    <div className=" d-flex align-items-center gap-2">
                    <h6 className="fs-6 mb-0">Phone2:</h6>
                      <p className="section__description mb-0"> 949-998-1977</p>
                    </div>

                    <div className=" d-flex align-items-center gap-2">
                      <h6 className="mb-0 fs-6">Email:</h6>
                      <p className="section__description mb-0">Majatik@yahoo.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
    </Helmet>
  )
}

export default Contact