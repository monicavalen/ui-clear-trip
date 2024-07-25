import React from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  return (
    <>
        <div className="p-relative">
          <input type="text" placeholder="Business email address" />
          {/* email icon */}
          <EmailIcon />
        </div>
        <a href="https://calendly.com/monica-kgrp" >
          <button className="tp-btn tp-btn-hover alt-color-black">
            <span>Get A Demo</span>
            <b></b>
          </button>
        </a>
    </>
  );
};

export default HeroForm;
