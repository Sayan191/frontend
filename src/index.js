import React from 'react';
import "./styles/styles.css"
import ReactDOM from 'react-dom';
import Routes from "./Routes"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

