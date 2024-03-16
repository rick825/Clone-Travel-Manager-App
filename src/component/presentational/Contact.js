import React from 'react';
import './Contact.css'

export const Contact = () => {
  return <>
          <div class="contact-sec">
        <div class="contact-head">
          <h2>Contact <span>Us</span></h2>
        </div>
        <div class="contact-cont">
          {/* <!-- contact form --> */}
          <div class="contact-form">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                  <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label"> Full Name </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      class="formbold-form-input"
                    />
                  </div>
            
                  <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label"> Email Address </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      class="formbold-form-input"
                    />
                  </div>
            
                  <div class="formbold-mb-5">
                    <label for="subject" class="formbold-form-label"> Subject </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      class="formbold-form-input"
                    />
                  </div>
            
                  <div class="formbold-mb-5">
                    <label for="message" class="formbold-form-label"> Message </label>
                    <textarea
                      rows="6"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="formbold-form-input"
                    ></textarea>
                  </div>
            
                  <div>
                    <button class="formbold-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- end contact form --> */}
          {/* <!-- contact item --> */}
          <div class="contact-item">
            <div class="contactitem phone">
              <div class="contactpic">
                  <img src="icon/contact/phone.png" alt="" />
              </div>
              <div class="contactinfo">
                 <p class="caption">Give us a Call.</p>
                 <h2 class="contmain">+91 999999999</h2>
              </div>
          </div>

          <div class="contactitem Email">
                 <div class="contactpic">
                  <img src="icon/contact/mail.png" alt="" />
              </div>
              <div class="contactinfo">
                 <p class="caption">Send us an Email</p>
                 <h2 class="contmain">Example@gmail.com</h2>
              </div>
          </div>

          <div class="contactitem social">
                <div class="contactpic">
                  <img src="icon/contact/social.png" alt="" />
              </div>
              <div class="contactinfo">
                 <p class="caption">Connect with us on social media</p>
                 <div class="contact-social">
                 <img src="icon/contact/fb.png" alt="" />
                 <img src="icon/contact/insta.png" alt="" />
                 <img src="icon/contact/twit.png" alt="" />
             </div>
              </div>
          </div>

          <div class="contactitem address">
                <div class="contactpic">
                  <img src="icon/contact/add.png" alt="" />
              </div>
              <div class="contactinfo">
                 <p class="caption">Come see us</p>
                 <h2 class="contmain"> Ranchi, 834001</h2>
              </div>
          </div>

        </div>
      </div>

      </div>
  </>
}
