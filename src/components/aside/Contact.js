import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <h2 className="accent-gradient">Contact</h2>
      <div className="contact-info">
        <p>
          <strong>Portfolio</strong>
        </p>
        <p className="link-wrap">
          <a href="#!" target="blank">
          https://monicaoduor.github.io/portfolio/
          </a>
        </p>
      </div>
      <div className="contact-info">
        <p>
          <strong>Email</strong>
        </p>
        <p>
          <a href="mailto:monicaoduor2@gmail.com" target="blank">
            monicaoduor2@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-info">
        <p>
          <strong>Phone</strong>
        </p>
        <p>+254722660028</p>
      </div>
      <div className="contact-info">
        <p>
          <strong>Address</strong>
        </p>
        <p>P.O. Box 5198 - 00200, Nairobi, Kenya</p>
      </div>
      <div className="contact-info">
        <p>
          <strong>Linkedin</strong>
        </p>
        <p className="link-wrap">
          <a href="https://www.linkedin.com/in/monica-oduor/" target="blank">
            Click for Profile
          </a>
        </p>
      </div>
      <div className="contact-info">
        <p>
          <strong>Github</strong>
        </p>
        <p className="link-wrap">
          <a href="http://github.com/MonicaOduor" target="blank">
            Click for Profile
          </a>
        </p>
      </div>
    </section>
  );
}
