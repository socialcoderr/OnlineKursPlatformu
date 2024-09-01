import React from "react";

export default function Courses() {
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
                <h2>Our Courses</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Courses
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses-part" className="pt-120 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="courses-top-search">
                <ul className="nav float-left" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="active"
                      id="courses-grid-tab"
                      data-toggle="tab"
                      href="#courses-grid"
                      role="tab"
                      aria-controls="courses-grid"
                      aria-selected="true"
                    >
                      <i className="fa fa-th-large"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      id="courses-list-tab"
                      data-toggle="tab"
                      href="#courses-list"
                      role="tab"
                      aria-controls="courses-list"
                      aria-selected="false"
                    >
                      <i className="fa fa-th-list"></i>
                    </a>
                  </li>
                  <li className="nav-item">Showing 4 0f 24 Results</li>
                </ul>

                <div className="courses-search float-right">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="courses-grid"
              role="tabpanel"
              aria-labelledby="courses-grid-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-1.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-1.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-2.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-2.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-3.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-3.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-4.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-4.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-5.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-5.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course mt-30">
                    <div className="thum">
                      <div className="image">
                        <img src="images/course/cu-1.jpg" alt="Course" />
                      </div>
                      <div className="price">
                        <span>Free</span>
                      </div>
                    </div>
                    <div className="cont">
                      <ul>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <span>(20 Reviews)</span>
                      <a href="courses-single.html">
                        <h4>Learn basic javascript from start for beginner</h4>
                      </a>
                      <div className="course-teacher">
                        <div className="thum">
                          <a href="#">
                            <img
                              src="images/course/teacher/t-1.jpg"
                              alt="teacher"
                            />
                          </a>
                        </div>
                        <div className="name">
                          <a href="#">
                            <h6>Mark anthem</h6>
                          </a>
                        </div>
                        <div className="admin">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-user"></i>
                                <span>31</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart"></i>
                                <span>10</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="courses-list"
              role="tabpanel"
              aria-labelledby="courses-list-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="single-course mt-30">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="thum">
                          <div className="image">
                            <img src="images/course/cu-1.jpg" alt="Course" />
                          </div>
                          <div className="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cont">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviews)</span>
                          <a href="#">
                            <h4>
                              Learn basic javascript from start for beginner
                            </h4>
                          </a>
                          <div className="course-teacher">
                            <div className="thum">
                              <a href="#">
                                <img
                                  src="images/course/teacher/t-1.jpg"
                                  alt="teacher"
                                />
                              </a>
                            </div>
                            <div className="name">
                              <a href="#">
                                <h6>Mark anthem</h6>
                              </a>
                            </div>
                            <div className="admin">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-user"></i>
                                    <span>31</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart"></i>
                                    <span>10</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-course mt-30">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="thum">
                          <div className="image">
                            <img src="images/course/cu-2.jpg" alt="Course" />
                          </div>
                          <div className="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cont">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviews)</span>
                          <a href="#">
                            <h4>
                              Learn basic javascript from start for beginner
                            </h4>
                          </a>
                          <div className="course-teacher">
                            <div className="thum">
                              <a href="#">
                                <img
                                  src="images/course/teacher/t-2.jpg"
                                  alt="teacher"
                                />
                              </a>
                            </div>
                            <div className="name">
                              <a href="#">
                                <h6>Mark anthem</h6>
                              </a>
                            </div>
                            <div className="admin">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-user"></i>
                                    <span>31</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart"></i>
                                    <span>10</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-course mt-30">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="thum">
                          <div className="image">
                            <img src="images/course/cu-3.jpg" alt="Course" />
                          </div>
                          <div className="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cont">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviews)</span>
                          <a href="#">
                            <h4>
                              Learn basic javascript from start for beginner
                            </h4>
                          </a>
                          <div className="course-teacher">
                            <div className="thum">
                              <a href="#">
                                <img
                                  src="images/course/teacher/t-3.jpg"
                                  alt="teacher"
                                />
                              </a>
                            </div>
                            <div className="name">
                              <a href="#">
                                <h6>Mark anthem</h6>
                              </a>
                            </div>
                            <div className="admin">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-user"></i>
                                    <span>31</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart"></i>
                                    <span>10</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="single-course mt-30">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="thum">
                          <div className="image">
                            <img src="images/course/cu-4.jpg" alt="Course" />
                          </div>
                          <div className="price">
                            <span>Free</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="cont">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          <span>(20 Reviews)</span>
                          <a href="#">
                            <h4>
                              Learn basic javascript from start for beginner
                            </h4>
                          </a>
                          <div className="course-teacher">
                            <div className="thum">
                              <a href="#">
                                <img
                                  src="images/course/teacher/t-4.jpg"
                                  alt="teacher"
                                />
                              </a>
                            </div>
                            <div className="name">
                              <a href="#">
                                <h6>Mark anthem</h6>
                              </a>
                            </div>
                            <div className="admin">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-user"></i>
                                    <span>31</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fa fa-heart"></i>
                                    <span>10</span>
                                  </a>
                                </li>
                              </ul>
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
          <div className="row">
            <div className="col-lg-12">
              <nav className="courses-pagination mt-50">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a href="#" aria-label="Previous">
                      <i className="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a href="#" aria-label="Next">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section
        id="video-feature"
        className="bg_cover pt-60 pb-110"
        style={{ backgroundImage: "url(images/bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-last order-lg-first">
              <div className="video text-lg-left text-center pt-50">
                <a
                  className="Video-popup"
                  href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
              <div className="feature pt-50">
                <div className="feature-title">
                  <h3>Our Facilities</h3>
                </div>
                <ul>
                  <li>
                    <div className="single-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-1.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Global Certificate</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-2.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Alumni Support</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-3.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Books & Library</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-bg"></div>
      </section>
    </>
  );
}
