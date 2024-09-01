import React from "react";

export default function CourseDetail() {
  return (
    <>
      <section id="course-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-45">
                <h5>Our course</h5>
                <h2>Featured courses </h2>
              </div>
            </div>
          </div>
          <div className="row course-slide mt-30">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </section>
    </>
  );
}
