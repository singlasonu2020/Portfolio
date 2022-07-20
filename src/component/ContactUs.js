
import React, { useEffect, useRef } from 'react';
import emailjs from "emailjs-com";
import "./ContactUs.css";
// import path from 'path'


function ContactUs() {
    useEffect(() => {

        const ele = document.getElementById("ContactUs");
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                document.getElementById(`SideDotContactUs`).style.color = "#5EBEC4";
                document.getElementById("ContactUsttitle").style.animationName="Title";

            }
            else {
                document.getElementById(`SideDotContactUs`).style.color = "rgb(257,257,257,0.1)";
                document.getElementById("ContactUsttitle").style.animationName="";

            }
        }, {
            threshold: 0.1
        });

        observer.observe(ele);
    })

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        document.getElementsByClassName("loader")[0].style.display="block";

        emailjs.sendForm(process.env. REACT_APP_Email, 'template_xntw4om', form.current, 'q1YqRqJ19X3McYHwZ')
            .then((result) => {

                emailjs.sendForm(process.env. REACT_APP_Email, 'template_b0n5m7m', form.current, 'q1YqRqJ19X3McYHwZ')
                .then((result) => {
                    document.getElementsByClassName("loader")[0].style.display="none";
                    document.getElementById("SuccusMessage").style.visibility="visible";
                    document.getElementById("ErrorMessage").style.visibility="hidden";
                }, (error) => {
                    document.getElementsByClassName("loader")[0].style.display="none";
                    document.getElementById("SuccusMessage").style.visibility="hidden";
                    document.getElementById("ErrorMessage").style.visibility="visible";
                });
               
            }, (error) => {
                document.getElementsByClassName("loader")[0].style.display="none";
                document.getElementById("SuccusMessage").style.visibility="hidden";
                document.getElementById("ErrorMessage").style.visibility="visible";
            });

      
    }




    return (
        <div id="ContactUs" className='ContactUs'>

            <span id="ContactUsttitle" className='ContactUsttitle'>get in touch</span>
            <div className='ContactUsComponent'>


                <div className='ContactUsSubComponent' >
                    <div className="AddressLine1"><span className="AddressLine1Span">Delhi, </span>India</div>
                    <div className="AddressLine2">708, Shivalik Boys Hostel, GGSIPU, Dwarka, 110078</div>
                    <div className="ContatDeatilsContactUs"><a href="mailto:singlasonu.net@gmail.com"> singlasonu.net@gmail.com</a></div>
                    <div className="ContatDeatilsContactUs" ><a href="tel:9660415904">+91 966-041-5904</a></div>
                </div>

                <div className='ContactUsSubComponent1'>
                    <form ref={form} id="ContactUsForm" onSubmit={sendEmail}>
                        <div className='InputNameEmail'>
                        <div className="EmailAndName">
                        <input className='InputContactUs InputContactUsName' type="text" name="name" placeholder='Name' required="true" onInput={e => {e.preventDefault(); document.getElementById("InValidName").style.visibility="hidden"}} onInvalid={e => {e.preventDefault(); document.getElementById("InValidName").style.visibility="visible"}}/>
                        <div id="InValidName" className="InValidateMessage">Please Enter Name</div>
                        </div>
                        <div className="EmailAndName">
                        <input className='InputContactUs InputContactUsEmail' type="email" name="email" placeholder='Email Id' required onInput={e => {e.preventDefault(); document.getElementById("InValidEmail").style.visibility="hidden"}}  onInvalid={e => {e.preventDefault(); document.getElementById("InValidEmail").style.visibility="visible"}} />
                        <div id="InValidEmail" className="InValidateMessage">Please Correct Email Id</div>
                        </div>
                        </div>
                        <input className='InputContactUs' type="text" name="subject" placeholder='Subject(Optional)'></input>
                        <textarea rows="4" className='InputContactUs' type="text" name="message" placeholder='Message' />
                        <input className="SubmitContactUsForm" type="submit" value="Get In Touch" />
                    </form>
                    <div className="loader"></div>
                    <div id="SuccusMessage"> Thank you For Geting In Touch</div>
                    <div id="ErrorMessage"> Sorry There Is Some Technical Error Or Please Check Your Details</div>
                   

                </div>



            </div>

        </div>


    )



}


export default ContactUs;