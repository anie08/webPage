import React from "react";
import "./ContactUs.scss";
const ContactUs = () => {
  return (
    <div>
      <section className="newsletter_section">
        <div className="newsletter_container container">
          <h2 className="newsletter_title">Lorem Ipsum</h2>
          <p className="newsletter_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="newsletter_box">
            <div className="newsletter_box_text">
              <h3>Stay in the loop</h3>
              <p>
                Subscribe to receive the latest news and updates about TDA. We
                promise not to spam you!
              </p>
            </div>

            <form className="newsletter_form">
              <input type="email" placeholder="Enter email address" />
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
