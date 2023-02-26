import React , { useState,} from 'react';
import {FormGroup} from "reactstrap";
import "../../styles/booking-form.css";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import MessageNoti from "./MessageNoti.jsx"
import DatePicker from "react-datepicker";


const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY} = process.env

const BookingForm = () => {
const [successMsg, setSuccessMsg] = useState("");
const {register,formState: { errors },handleSubmit,reset} = useForm();

const [hidden,setHidden]=useState(false)

//Data 

const [startDate,setStartDate]=useState(new Date())


console.log(successMsg)
 const submit = (data,e) => {
       e.preventDefault();

       console.log(data);
       setHidden(true)

       setSuccessMsg("your form is sending ")
        emailjs.send(REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID, 
            data,
          REACT_APP_PUBLIC_KEY )
          .then((result) => {
              console.log(result.text);
              if (result.text === "OK"){
                reset();
                  setSuccessMsg(`Thank you ${data.firstName} your form is Send`)
                }

          }, (error) => {
              console.log(error.text);

          });
      };
      
  return (
     <form  onSubmit={handleSubmit(submit)} >
      <FormGroup className="booking__form d-inline-block me-4 mb-4 mt-1">
            <input type="text" placeholder="First Name" id="firstName" 
                  {...register("firstName", 
                    {required: "*Write Your First name" , message:"Enter your first Name error message"},  
                  )}       
              />

            {errors.firstName && (<p className="errorMsg">{errors.firstName.message}</p>)}

      </FormGroup>

     

      <FormGroup className="booking__form d-inline-block me-4 mb-4 mt-1">
            <input type="text" placeholder="LastName" id="lastName"
                  {...register("lastName", 
                      {required: "*LastName is required.",message:"Enter your Last Name error message"})}   
              />
            {errors.lastName && (<p className="errorMsg">{errors.lastName.message}</p>)}
      </FormGroup>
     

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
           <input type="email" placeholder="Email" id="email"
                  {...register("email", 
                              {required: "*Email is required.", pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                               message: "Email is not valid."}})}
          />
         {errors.email && <p className="errorMsg">{errors.email.message}</p>}
      </FormGroup>
  
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
            <input type="number" placeholder="PhoneNumber" name="phoneNumber"
                  {...register("phoneNumber", {required: "* Phone Number is required.",
                      validate: {checkLength: (value)=>value.length >=12}
                   })}        
            />
          {errors.phoneNumber && (<p className="errorMsg">{errors.phoneNumber.message}</p>)}      
        </FormGroup>
 
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="text" placeholder="From Address"  id="fromAddress"
                  {...register("fromAddress", {required: "*From Address is required."})}    
          
          />
          {errors.fromAddress && (<p className="errorMsg">{errors.fromAddress.message}</p>)}      
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="text" placeholder="To Address"id="toAddress" {...register("toAddress", {
                required: "*To Address is required."
              })}/>
          {errors.toAddress && (<p className="errorMsg">{errors.toAddress.message}</p>)}      
        </FormGroup>

        

      <FormGroup className="booking__form d-inline-block me-4 mb-4 date__picker">
          <input type="date" id="journeyDate" placeholder="date placeholdere"   
                {...register("journeyDate",{valueAsDate: true})}
                dateformat="MMM dd yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}                
                showIcon
                locale="en-GB"
                showWeekNumbers
                placeholderText="Select a weekday"
                calendarStartDay={3}
                name="date"

            />
            {/*<Label>My Date</Label>*/}
         {errors.journeyDate && (<p className="errorMsg">{errors.JourneyDate.message}</p>)}   
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4 time__picker">
        <input type="time"  id ="timePicker" 
          {...register("timePicker", {required: "*Please select at-least one Time Picker"},{valueAsDate: true})}
          showTimeSelect
          dateFormat="Pp"
          placeholder="time placeholder"
          name="time"

        />
      
        {errors.timePicker && (<p className="errorMsg">{errors.timePicker.message}</p>)}   
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4" >
          <select  id="numberPerson"      
                  {...register("numberPerson", {required: "Number of Person" })}  >
                {errors.numberPerson && (<p className="errorMsg">{errors.numberPerson.message}</p>)} 
                  <option value="1 person">1 Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5+ person">5+ Person</option>
            </select>
        </FormGroup> 

     <FormGroup className="booking__form " >
        <label>Message</label>
            <textarea
            className="textarea mt-3"
              rows={5}
              type="textarea"
              placeholder="Write"
              id="message"
              {...register("message", )}
             >
            </textarea>
      </FormGroup>

      <button className="contact__btn" 
              type="submit" 
              value="Send" 
              
               >
           send Form
      </button >
     
        <MessageNoti  successMsg= {successMsg}
                        setHidden={setHidden}
                        hidden={hidden}

        />
       
    </form>
  )
}

export default BookingForm