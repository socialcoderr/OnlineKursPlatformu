import React from "react";

export default function Gallery() {
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
                <h2>Image Gallery</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Gallery
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-90 pb-120 gray-bg">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/1.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/1.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/2.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/2.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/3.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/3.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/4.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/4.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/5.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/5.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/6.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/6.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/7.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/7.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/8.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/8.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-4 col-xs-6 thumb">
              <a href="images/gallery/9.jpg">
                <figure>
                  <img
                    className="img-fluid img-thumbnail"
                    src="images/gallery/9.jpg"
                    alt="Gallery Image"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
