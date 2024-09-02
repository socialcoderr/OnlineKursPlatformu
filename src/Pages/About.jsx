import React from "react";

export default function About() {
  return (
    <>
      <section
        id="page-banner"
        className="pt-105 pb-110 bg_cover"
        data-overlay="8"
        style={{ backgroundImage: "url(images/page-banner-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-page" className="pt-70 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Edubin</h2>
              </div>
              <div className="about-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet. Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. Auci elit cons equat ipsutis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate cursus a sit amet.
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  mauris.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-image mt-50">
                <img src="images/about/about-2.jpg" alt="About" />
              </div>
            </div>
          </div>
          <div className="about-items pt-60">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-single-items mt-30">
                  <span>01</span>
                  <h4>Why Choose us</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-single-items mt-30">
                  <span>02</span>
                  <h4>Our Mission</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="about-single-items mt-30">
                  <span>03</span>
                  <h4>Our Vision</h4>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit sollicitudirem
                    quibibendum auci
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-part pt-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>About us</h5>
                <h2>Welcome to Edubin</h2>
              </div>
              <div className="about-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet. Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. Auci elit cons equat ipsutis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate cursus a sit amet.
                  Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  mauris.
                </p>
                <a href="#" className="main-btn mt-55">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="about-event mt-50">
                <div className="event-title">
                  <h3>Upcoming events</h3>
                </div>
                <ul>
                  <li>
                    <div className="single-event">
                      <span>
                        <i className="fa fa-calendar"></i> 2 December 2018
                      </span>
                      <a href="events-single.html">
                        <h4>Campus clean workshop</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o"></i> 10:00 AM - 3:00 PM
                      </span>
                      <span>
                        <i className="fa fa-map-marker"></i> Rc Auditorium
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="single-event">
                      <span>
                        <i className="fa fa-calendar"></i> 2 December 2018
                      </span>
                      <a href="events-single.html">
                        <h4>Tech Summit</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o"></i> 10:00 AM - 3:00 PM
                      </span>
                      <span>
                        <i className="fa fa-map-marker"></i> Rc Auditorium
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="single-event">
                      <span>
                        <i className="fa fa-calendar"></i> 2 December 2018
                      </span>
                      <a href="events-single.html">
                        <h4>Environment conference</h4>
                      </a>
                      <span>
                        <i className="fa fa-clock-o"></i> 10:00 AM - 3:00 PM
                      </span>
                      <span>
                        <i className="fa fa-map-marker"></i> Rc Auditorium
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg">
          <img src="images/about/bg-1.png" alt="About" />
        </div>
      </section>
    </>
  );
}
