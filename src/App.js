import React, { useState, useEffect } from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Login from './components/SignUp-In/Login';
import Signup from './components/SignUp-In/Signup';
 import Forgot from './components/SignUp-In/Forgot';
//  import Layout from './Layout';
// import Metric from './components/Metric';
// import DashSummary from './components/Dashboard/DashSummary';
import Students from './components/Student/Students';
import Instructor from './components/Instructor/Instructor';
import Courses from './components/Course/Courses';
import InstructorForm from './components/Instructor/InstructorForm';
import StudentForm from './components/Student/StudentForm';
import InDashboard from './components/Instructor/InDashboard';
// import CourseDetails from './components/Course/CourseDetails';
import InCourseDetails from './components/Instructor/InCourseDetails';
import CreateCourseForm from './components/CreateCourseForm';
import StCourseDetails from './components/Student/StCourseDetails';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then(resp => {
      if (resp.ok){
        resp.json().then((user) => setUser(user))
      }
    })
  }, [])

  const navigate = useNavigate()


  function onLogin(user) {
    
    if (!user.isadmin){
      navigate(`/students`)
    }
    
    else if (user.email === "email"){
      navigate('/courses')
    }
    
    else {
      navigate('/dashboard')
    }
      
  }


  return (
    <div className="App">
    
    
    <Routes>
      
        <Route path="/" element={<Login  onLogin={onLogin}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<Forgot/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/studentform" element={<StudentForm/>} />
        <Route path="/instructors" element={<Instructor/>} />
        <Route path="/instructorform" element={<InstructorForm/>} />
        <Route path="/indashboard" element={<InDashboard/>} />
        <Route path="/incoursedetails" element={<InCourseDetails/>} />
        <Route path="/createcourse" element={<CreateCourseForm/>} />
        <Route path="/StCourseDetails" element={<StCourseDetails/>} />
        
       
    </Routes>
       
    </div>
  );
}

export default App;
