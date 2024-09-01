import React from "react";

export default function PrivacyPolicy() {
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
                <h2>Privacy Policy</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Privacy Policy
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-105 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-desc">
                <h2 className="mb-30">Our Policy</h2>
                <p>
                  One of the most important things you should know and never
                  neglect when you own a website or run an online shop is the
                  legal aspect of the trade. In this article, we are going to
                  provide all the information necessary to completely understand
                  privacy policies, how they work and why you need them.{" "}
                </p>

                <p>
                  It is essential to understand that even if you don't
                  explicitly collect any information from your visitors, most
                  websites usually use cookies that store visitors' data every
                  time they drop by web pages. It can be a slippery slope when
                  left unmanaged, so the existence of a privacy policy is of
                  utmost importance.
                </p>

                <p>
                  Dealing with any website online can leave you vulnerable to
                  cyber-attacks and data theft, among a host of other types of
                  risks. Because of this, you must know the basic privacy laws
                  and requirements to make sure that your website is complying
                  well with these standards.
                </p>
              </div>
              <div className="privacy-list mt-10 mb-30">
                <ul>
                  <li>
                    <a href="policy.html">What is a privacy policy?</a>
                  </li>
                  <li>
                    <a href="policy.html">
                      What to include in a privacy policy?
                    </a>
                  </li>
                  <li>
                    <a href="policy.html">Why do you need a privacy policy?</a>
                  </li>
                  <li>
                    <a href="policy.html">
                      Where should you display your privacy policy?
                    </a>
                  </li>
                  <li>
                    <a href="policy.html">
                      How should you enforce your privacy policy?
                    </a>
                  </li>
                  <li>
                    <a href="policy.html">
                      Sample free privacy policy template
                    </a>
                  </li>
                </ul>
              </div>
              <h2 className="mb-30">What is a privacy policy?</h2>
              <p>
                One of the most important things you should know and never
                neglect when you own a website or run an online shop is the
                legal aspect of the trade. In this article, we are going to
                provide all the information necessary to completely understand
                privacy policies, how they work and why you need them.{" "}
              </p>

              <p>
                It is essential to understand that even if you don't explicitly
                collect any information from your visitors, most websites
                usually use cookies that store visitors' data every time they
                drop by web pages. It can be a slippery slope when left
                unmanaged, so the existence of a privacy policy is of utmost
                importance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
