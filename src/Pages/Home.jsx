import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CourseCard from "../Components/CourseCard";
export default function Home() {
  return (
    <>
      <div>
        <section id="category-part">
          <div className="container">
            <div className="category pt-40 pb-80">
              <div className="row">
                <div className="col-lg-4">
                  <div className="category-text pt-40">
                    <h2>Best platform to learn everything</h2>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
                  <div className="row category-slide mt-40">
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-1">
                          <span className="icon">
                            <img src="images/all-icon/ctg-1.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Language</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-2">
                          <span className="icon">
                            <img src="images/all-icon/ctg-2.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Business</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-3">
                          <span className="icon">
                            <img src="images/all-icon/ctg-3.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Literature</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-1">
                          <span className="icon">
                            <img src="images/all-icon/ctg-1.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Language</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-2">
                          <span className="icon">
                            <img src="images/all-icon/ctg-2.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Business</span>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="col-lg-4">
                      <a href="#">
                        <span className="single-category text-center color-3">
                          <span className="icon">
                            <img src="images/all-icon/ctg-3.png" alt="Icon" />
                          </span>
                          <span className="cont">
                            <span>Literature</span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/*Home da kalacak*/}
        <section id="news-part" className="pt-115 pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title pb-50">
                  <h5>Latest News</h5>
                  <h2>From the news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="single-news mt-30">
                  <div className="news-thum pb-25">
                    <img src="images/news/n-1.jpg" alt="News" />
                  </div>
                  <div className="news-cont">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-calendar"></i>2 December 2018{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span>By</span> Adam linn
                        </a>
                      </li>
                    </ul>
                    <a href="blog-single.html">
                      <h3>Tips to grade high cgpa in university life</h3>
                    </a>
                    <p>
                      Lorem ipsum gravida nibh vel velit auctor aliquetn
                      sollicitudirem quibibendum auci elit cons equat ipsutis
                      sem nibh id elit. Duis sed odio sit amet nibh vulputate
                      cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
                      nec tellus a odio tincidunt .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-news news-list">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="news-thum mt-30">
                        <img src="images/news/ns-1.jpg" alt="News" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="news-cont mt-30">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-calendar"></i>2 December 2018{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <span>By</span> Adam linn
                            </a>
                          </li>
                        </ul>
                        <a href="blog-single.html">
                          <h3>Intellectual communication</h3>
                        </a>
                        <p>
                          Gravida nibh vel velit auctor aliquetn sollicitudirem
                          quibibendum auci elit cons vel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-news news-list">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="news-thum mt-30">
                        <img src="images/news/ns-2.jpg" alt="News" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="news-cont mt-30">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-calendar"></i>2 December 2018{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <span>By</span> Adam linn
                            </a>
                          </li>
                        </ul>
                        <a href="blog-single.html">
                          <h3>Study makes you perfect</h3>
                        </a>
                        <p>
                          Gravida nibh vel velit auctor aliquetn sollicitudirem
                          quibibendum auci elit cons vel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-news news-list">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="news-thum mt-30">
                        <img src="images/news/ns-3.jpg" alt="News" />
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="news-cont mt-30">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-calendar"></i>2 December 2018{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <span>By</span> Adam Linn
                            </a>
                          </li>
                        </ul>
                        <a href="blog-single.html">
                          <h3>Technology eduction is now....</h3>
                        </a>
                        <p>
                          Gravida nibh vel velit auctor aliquetn sollicitudirem
                          quibibendum auci elit cons vel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/*Home*/}
        <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
          <div className="container">
            <div className="row patnar-slide">
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-1.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-2.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-3.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-4.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-2.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="single-patnar text-center mt-40">
                  <img src="images/patnar-logo/p-3.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*Home*/}
        <a href="#" className="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}
