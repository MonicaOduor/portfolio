import React from "react";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Aside() {
  return (
    <aside className="aside-container">
      <Contact /><Skills />



      <Projects/>
    </aside>
  );
}
