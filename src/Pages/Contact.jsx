import React from "react";

export default function Contact() {
  return (
    <>
      <section
        id="page-banner"
        className="pt-105 pb-130 bg_cover"
        data-overlay="8"
        style={{ backgroundImage: "url(images/page-banner-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-cont">
                <h2>Contact</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-page" className="pt-90 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="contact-from mt-30">
                <div className="section-title">
                  <h5>Contact Us</h5>
                  <h2>Keep in touch</h2>
                </div>
                <div className="main-form pt-45">
                  <form
                    id="contact-form"
                    action="https://thepixelcurve.com/html/edubin/contact.php"
                    method="post"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            data-error="Name is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            data-error="Valid email is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            data-error="Subject is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            data-error="Phone is required."
                            required="required"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="single-form form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            data-error="Please,leave us a message."
                            required="required"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <p className="form-message"></p>
                      <div className="col-md-12">
                        <div className="single-form">
                          <button type="submit" className="main-btn">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-address mt-30">
                <ul>
                  <li>
                    <div className="single-address">
                      <div className="icon">
                        <i className="fa fa-home"></i>
                      </div>
                      <div className="cont">
                        <p>
                          143 castle road 517 district, kiyev port south Canada
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-address">
                      <div className="icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="cont">
                        <p>+3 123 456 789</p>
                        <p>+1 222 345 342</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-address">
                      <div className="icon">
                        <i className="fa fa-envelope-o"></i>
                      </div>
                      <div className="cont">
                        <p>info@yourmail.com</p>
                        <p>help.pixelcurve@gmail.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="map mt-30">
                <div id="contact-map"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
