import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Home from './pages/Home';
import Attendance from './pages/Attendance'; 
import Classes from './pages/Classes'; 
import Courses from './pages/Courses';
import Events from './pages/Events';
import Grades from './pages/Grades'; 
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Students from './pages/Students';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const { user } = useAuthContext()

  return (
    <>
      <Router>
        {user && <Navbar />}
        <Routes>
          <Route path='/' exact element={user ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />

          <Route path='/attendance' element={<Attendance />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/events' element={<Events />} />
          <Route path='/grades' element={<Grades />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/tasks' element={<Tasks />} />
          
          <Route path='/students-details' element={<Students />} />

          <Route path='/dashboard/teacher' element={<TeacherDashboard />} />
          <Route path='/dashboard/admin' element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
