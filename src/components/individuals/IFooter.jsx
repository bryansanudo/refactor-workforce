import React from "react";
import logoImg from "@/assets/logo.png";

const IFooter = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img src={logoImg} alt="" />
          <p>
            EB-3 Workforce Solutions is not a law firm and does not provide{" "}
            legal
            <br /> advice. Your communication with EB-3 Workforce Solutions does
            not <br /> create an attorney-client relationship and is not
            protected by attorney-client <br /> privilege.
          </p>
        </aside>

        <nav>
          <header className="footer-title text-black font-extrabold">
            Quick Links
          </header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Testimonials</a>
          <a className="link link-hover">Resources</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title text-black font-extrabold">
            Contact Us
          </header>
          <p className="link link-hover">support@eb3wfs.com</p>
          <p className="">American Dream Recruiting</p>
          <p className="">777 Brickell Avenue Suite</p>
          <p className="">500 Miami, FL. 33131</p>
        </nav>
        <nav>
          <header className="footer-title text-black font-extrabold">
            Legal
          </header>
          <a className="link link-hover">Copyright © 2023 All Right Reserved</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Services</a>
        </nav>
      </footer>
    </>
  );
};

export default IFooter;
