import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Attendance from './pages/Attendance'; 
import Classes from './pages/Classes'; 
import Courses from './pages/Courses';
import Events from './pages/Events';
import Grades from './pages/Grades'; 
import Settings from './pages/Settings';
import Tasks from './pages/Tasks'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/events' element={<Events />} />
          <Route path='/grades' element={<Grades />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
