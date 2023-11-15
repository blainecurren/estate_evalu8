import React from "react";
import "./contact.scss";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkr4qi1",
        "template_bi7ryto",
        form.current,
        "8KJjbI8SO3C-XpFMJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss the future</h1>
          <div className="c-info">
            {/* <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 940 704 2282
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              contact: blaine.curren@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Wichita Falls, TX
            </div> */}
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to work together?</b> Feel free to get in touch with me down
            below. Go ahead, try it, it works I promise.
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks, I'll get back to you ASAP!"}
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
