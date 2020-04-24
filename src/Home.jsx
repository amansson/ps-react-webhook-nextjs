import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "./Header";
import { Navbar } from "../src/Navbar";

function index() {
  return (
    <div>
      <Header />
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Code Camp is a community event where developers learn from fellow
              developers. We also have developer related topics that include
              software branding, legal issues around software as well as other
              topics developers are interested in hearing about.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
