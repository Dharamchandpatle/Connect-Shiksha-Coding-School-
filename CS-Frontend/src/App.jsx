import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./screen/Home";
import About from "./screen/About";
import Gallery from "./screen/Gallery";
import Contact from "./screen/Contact";
import Login from "./screen/Login";
import Registration from "./screen/Registration";
import ForgetPassword from "./screen/ForgetPassword";
import OtpVerification from "./screen/OtpVerification";
import { useMediaQuery } from "react-responsive";
import FloatingMenuBar from "./components/FloatingMenuBar";
import ScrollToTop from "./components/ScrollToTop";
import Courses from "./screen/Courses";
import StudentProfile from "./screen/StudentProfile";
import Signin from "./screen/admin/Signin";
import DashboardView from "./screen/admin/DashboardView";
import AddCourses from "./screen/admin/Courses/AddCourse";
import AllCourses from "./screen/admin/Courses/AllCourse";
import AddImages from "./screen/admin/GalleryImages/AddImage";
import AllImages from "./screen/admin/GalleryImages/AllImages";
import AddBatches from "./screen/admin/Batches/AddBatches";
import AllBatches from "./screen/admin/Batches/AllBatches";
import AllEvents from "./screen/admin/Events/AllEvents";
import AddEvents from "./screen/admin/Events/AddEvent";
import AllProjects from "./screen/admin/Projects/AllIProjects";
import AddProjects from "./screen/admin/Projects/AddProject";
import EnrolledStudents from "./screen/admin/Registrations/EnrollStudents";
import MakeTeacher from "./screen/admin/Teachers/MakeTeacher";
import Admin from "./screen/admin/Admin";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import TeacherDash from "./screen/Teachers/TeacherDashboard";
import User from "./screen/admin/Students/User";
import CourseDetails from "./components/CourseDetails";
import SingleCourse from "./screen/SingleCourse";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import CourseSection from "./components/CourseSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cd" element={<CourseDetails />} />
              <Route path="/CourseSection" element={<CourseSection />} />
              <Route path="/sc" element={<SingleCourse />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/student" element={<StudentProfile />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/verify-otp" element={<OtpVerification />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/admin/signin" element={<Signin />} />
              
              <Route path="/admin" element={<Admin />}>
                <Route path="dashboardView" element={<DashboardView />} />
                <Route path="addCourses" element={<AddCourses />} />
                <Route path="allCourses" element={<AllCourses />} />
                <Route path="addImages" element={<AddImages />} />
                <Route path="allImages" element={<AllImages />} />
                <Route path="addBatches" element={<AddBatches />} />
                <Route path="allBatches" element={<AllBatches />} />
                <Route path="allEvents" element={<AllEvents />} />
                <Route path="addEvents" element={<AddEvents />} />
                <Route path="allProjects" element={<AllProjects />} />
                <Route path="addProjects" element={<AddProjects />} />
                <Route path="allUser" element={<User />} />
                <Route path="allOrders" element={<EnrolledStudents />} />
                <Route path="makeSubAdmin" element={<MakeTeacher />} />
              </Route>

              <Route path="/subAdmin" element={<TeacherDash />}>
                <Route path="addCourses" element={<AddCourses />} />
                <Route path="allCourses" element={<AllCourses />} />
                <Route path="addImages" element={<AddImages />} />
                <Route path="allImages" element={<AllImages />} />
                <Route path="addBatches" element={<AddBatches />} />
                <Route path="allBatches" element={<AllBatches />} />

                <Route path="allEvents" element={<AllEvents />} />
                <Route path="addEvents" element={<AddEvents />} />
                <Route path="allProjects" element={<AllProjects />} />
                <Route path="addProjects" element={<AddProjects />} />
                <Route path="allUser" element={<User />} />
              </Route>
            </Routes>
            {isMobile && <FloatingMenuBar />}
            <FloatingWhatsApp
              phoneNumber="7748893097"
              accountName="Connect Shiksha Team"
              avatar="https://ik.imagekit.io/lna8p52h8/new_logo__1_-removebg-preview.png?updatedAt=1716633215950"
              allowEsc
              allowClickAway={true}
              notification
              notificationSound
            />
          </ScrollToTop>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
