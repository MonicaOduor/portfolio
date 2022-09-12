import React from "react";
import hciacert from "../../images/HCIA-Cert.pdf";
import udemycert from "../../images/Udemy-java-basics-certificate.jpg";
import datacampcert from "../../images/sql-certificate.pdf";
import moringacert from "../../images/moringa-certificate.pdf";

export default function Certificates() {
  return (
    <section>
      <h2 className="accent-gradient">Certificates</h2>
      <div className="cert-card">
        <div className="cert-card-content">
          <h3>
            <a href={hciacert} target="blank">
              Huawei Certified ICT Associate
            </a>
          </h3>
          <p>
            <em>Huawei Certified ICT Associate</em>
          </p>
        </div>
        <h4>Valid July 2024</h4>
      </div>

      <div className="cert-card">
        <div className="cert-card-content">
          <h3>
            <a href={udemycert} target="blank">
              Java For Beginners
            </a>
          </h3>
          <p>
            <em>Java for beginners</em>
          </p>
        </div>
        <h4>March 2021</h4>
      </div>

      <div className="cert-card">
        <div className="cert-card-content">
          <h3>
            <a href={moringacert} target="blank">
              Introduction to Programming
            </a>
          </h3>
          <p>
            <em>Introduction to Programming</em>
          </p>
        </div>
        <h4>March 2021</h4>
      </div>

      <div className="cert-card">
        <div className="cert-card-content">
          <h3>
            <a href={datacampcert} target="blank">
              Introduction to SQL
            </a>
          </h3>
          <p>
            <em>Introduction to SQL</em>
          </p>
        </div>
        <h4>August 2021</h4>
      </div>
    </section>
  );
}
