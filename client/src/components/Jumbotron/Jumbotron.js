import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1 id="Headline">Recipe Search</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
      class="Underline"
    >
      Search for a recipe below
    </a>
  </div>
);

export default Jumbotron;
