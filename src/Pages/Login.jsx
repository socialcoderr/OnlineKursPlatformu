import React from "react";

export default function Login() {
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
                <h2>Login</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Login
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signup pt-105 pb-120 gray-bg">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="signup-content">
              <form method="POST" id="signup-form" className="signup-form">
                <h2 className="form-title pb-20">Create Account</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <span
                    toggle="#password"
                    className="zmdi zmdi-eye field-icon toggle-password"
                  ></span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="re_password"
                    id="re_password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label for="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="main-btn register-submit"
                    value="Sign up"
                  />
                </div>
              </form>
              <p className="loginhere">
                Have already an account ?
                <a href="#" className="loginhere-link">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
