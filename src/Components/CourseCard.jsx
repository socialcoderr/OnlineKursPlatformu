import React from "react";

export default function CourseCard() {
  return;
  <>
    <div className="col-lg-4">
      <div className="single-course">
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
                <img src="images/course/teacher/t-1.jpg" alt="teacher" />
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
  </>;
}
