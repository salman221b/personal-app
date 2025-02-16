import React from "react";
import "./Marquee.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";
import js from "../assets/js.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
const Marquee = () => {
  return (
    <div>
      <div className="marquee-container">
        <div className="marquee">
          <ul className="marquee-content">
            <li>
              <img src={html} alt="HTML" />
            </li>
            <li>
              <img src={css} alt="CSS" />
            </li>
            <li>
              <img src={js} alt="JS" />
            </li>
            <li>
              <img src={react} alt="React" />
            </li>
            <li>
              <img src={bootstrap} alt="Bootstrap" />
            </li>

            <li>
              <img src={node} alt="Node" />
            </li>
            <li>
              <img src={express} alt="Express" />
            </li>
            <li>
              <img src={mongo} alt="MongoDB" />
            </li>
            <li>
              <img src={python} alt="Python" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
