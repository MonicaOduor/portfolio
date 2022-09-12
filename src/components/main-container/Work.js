import React from "react";

export default function Work() {
  return (
    <section>
      <h2 className="accent-gradient">Work History</h2>
      <div className="card">
        <div className="card-main">
          <h3>Rentika Ltd</h3>
          <h4>June 2022 - Present</h4>
        </div>
        <p>
          <em>Nairobi, Kenya</em>
        </p>
        <ul>
          <li>
            Developed a modern, mobile responsive website for{" "}
            <a href="https://rentika.app//">the company</a> using HTML, CSS,
            Wordpress and Bootstrap. Recently updated this site to better meet
            accessibility standards and improve performance by minimizing image
            sizes and simplifying code.
          </li>
          <li>Wrote straightforward clean code.</li>
          <li>
            Maintained and updated websites based on feedback from clients.
          </li>
          <li>Redesigned and improved responsive layouts for select pages.</li>
        </ul>
      </div>
      <h2 className="accent-gradient">Academic Experience</h2>
      <div className="card">
        <div className="card-main">
          <h3>Web Development Technologies</h3>
        </div>

        <ul>
          <li>
            Developed an {" "}
            <a href="https://akan-namegenerator.netlify.app/">
              interactive Javascript application
            </a>{" "}
            that allows users to generate Ghanaian names based on the time and
            day they were born. I created a sleek appearance with clear
            information using HTML, CSS, Bootstrap and Javascript.
          </li>
          <li>
            I collaborated with a team to design a CRUD React website that
            displays notes. ReactJS was used to display information, and an API
            request was used to render pertinent information.
          </li>
        </ul>
      </div>

      <div className="card">
        <div className="card-main">
          <h3>Database Systems</h3>
        </div>

        <ul>
          <li>Database Project for Inventory Control Management using SQL</li>
        </ul>
      </div>
    </section>
  );
}
