import React from "react";
import Work from "./Work";
import OpenSource from "./OpenSource";
import Education from "./Education";
import Certificates from "./Certificates";

export default function MainContainer() {
  return (
    <div className="main-container">
      <p>
        I am a recent graduate in Mathematics and Computer Science. I possess a
        stellar customer service record and superb work ethic. Broadly and
        deeply knowledgeable in a wide variety of computer languages as well as
        the principles and techniques of website construction and maintenance.
        Highly adept at conveying complex technical information to a variety of
        professional and lay audiences in a clear and understandable manner.
      </p>
      <Work />
      <OpenSource />
      <Education />
      <Certificates />
    </div>
  );
}
