import React from "react";
import { Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import CourseCard from "./Components/CourseCard";
import CourseList from "./Components/CourseList";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Sidebar from "./Components/Sidebar";
import Slider from "./Components/Slider";
import Spinner from "./Components/Spinner";
import Testimonial from "./Components/Testimonial";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import CourseDetail from "./Pages/CourseDetail";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import FAQ from "./Pages/FAQ";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Teacher from "./Pages/Teacher";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseCard" element={<CourseCard />} />
        <Route path="/spinner" element={<Spinner />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courseList" element={<CourseList />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/searchBar" element={<SearchBar />} />
        <Route path="/sideBar" element={<Sidebar />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
