import React from "react";

export default function FAQ() {
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
                <h2>FAQ</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      FAQ
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-105 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-30">Frequently asked questions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="faq-accordion"
                  role="tabpanel"
                  aria-labelledby="faq-accordion-tab"
                >
                  <div className="faq-accordion-cont">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">How do I apply?</span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>

                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Before you can send us your application, you'll
                              need to pay an application fee of £18 for one
                              course choice, or £24 for up to five course
                              choices. If you are applying for a course(s) that
                              starts in 2020, the application fee is £20 if
                              you’re applying to just one course, or £25 for
                              multiple courses and for late applications sent
                              after 30 June 2020.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingTow">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseTow"
                            aria-expanded="true"
                            aria-controls="collapseTow"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  What are entry requirements?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>

                        <div
                          id="collapseTow"
                          className="collapse"
                          aria-labelledby="headingTow"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  How do I get a reference?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  What are entry requirements?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFore">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseFore"
                            aria-expanded="false"
                            aria-controls="collapseFore"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  What should I include in my personal
                                  statement?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseFore"
                          className="collapse"
                          aria-labelledby="headingFore"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingSix">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  What will happen when I’ve sent my
                                  application?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingSix">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  What Information We Collect About You
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="headingSeven">
                          <a
                            href="#"
                            data-toggle="collapse"
                            className="collapsed"
                            data-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            <ul>
                              <li>
                                <i
                                  className="fa fa-question-circle"
                                  aria-hidden="true"
                                ></i>
                              </li>
                              <li>
                                <span className="head">
                                  Can I get a free trial before I purchase?
                                </span>
                              </li>
                              <li></li>
                            </ul>
                          </a>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse"
                          aria-labelledby="headingSeven"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries,.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
