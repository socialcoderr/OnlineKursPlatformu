import React from "react";

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
                        <a href="register.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
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
                  <a className="navbar-brand" href="index-4.html">
                    <img src="images/logo.png" alt="Logo" />
                  </a>
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
                        <a className="active" href="index.html">
                          Home
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a className="active" href="index.html">
                              Home 01
                            </a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 03</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home 04</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="policy.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="courses.html">Courses</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="courses.html">Courses</a>
                          </li>
                          <li>
                            <a href="courses-single.html">Course Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="events.html">Events</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="events.html">Events List 1</a>
                          </li>
                          <li>
                            <a href="events-2.html">Events List 2</a>
                          </li>
                          <li>
                            <a href="events-single.html">Event Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="teachers.html">Teachers</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="teachers.html">teachers</a>
                          </li>
                          <li>
                            <a href="teachers-2.html">teachers 2</a>
                          </li>
                          <li>
                            <a href="teachers-single.html">teacher Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="blog.html">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="shop.html">Shop</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop-single.html">Shop Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="contact.html">Contact</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="contact-2.html">Contact Us 2</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="right-icon text-right">
                    <ul>
                      <li>
                        <a href="javascript:void(0)" id="search">
                          <i className="fa fa-search"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag"></i>
                          <span>0</span>
                        </a>
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
