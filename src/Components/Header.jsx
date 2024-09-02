import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header id="header-part">
        <div className="header-top d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="header-contact">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <a href="#">info@yourmail.com</a>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>
                      <span>+0123-456-5678</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="header-right d-flex justify-content-end">
                  <div className="social d-flex">
                    <span className="follow-us">Follow Us :</span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="login-register">
                    <ul>
                      <li>
                        <Link to="/login">Login / Register</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="Logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="active" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about">About Us</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/privacyPolicy">Privacy Policy</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/courses">Courses</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/events">Events</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/">Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/teacher">Teachers</Link>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link to="/blog">Blog</Link>
                        <ul className="sub-menu"></ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/faq">FAQ</Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
