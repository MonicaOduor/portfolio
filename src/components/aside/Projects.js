import React from "react";

export default function Projects() {
  return (
    <section className="contact">
      <h2 className="accent-gradient">Projects</h2>
      <ol>
        <li>
          <a href="https://monicaoduor.github.io/pulse" target="blank">
            Pulse
          </a>
          <p>
            Recreating Pulse application, a challenge provided by Frontend
            Practice. I learnt about pricing layouts, hover effects with css,
            multi-column footers and much more
          </p>
        </li>

        <li>
          <a href="https://monicaoduor.github.io/pulse" target="blank">
            A guest list application
          </a>
          <p>
            I learnt about redux, react-router, react hooks, and react toastify
          </p>
        </li>

        <li>
          <a
            href="https://monicaoduor.github.io/backstagetalks/"
            target="blank"
          >
            Backstage Talks
          </a>
          <p>
            {" "}
            Recreating Pulse application, a challenge provided by Frontend
            Practice. I learnt about Scroll transitions, Color choices, Fixed
            content, and Minimal layout
         </p>
        </li>
      </ol>
    </section>
  );
}
