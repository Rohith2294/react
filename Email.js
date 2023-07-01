import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { } from "./App"
function Email() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_svit4zl', 'templete_kkwhqd7', e.target, 'ut2LMibcjVAhN3kRy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} >
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
 

}

export default Email
