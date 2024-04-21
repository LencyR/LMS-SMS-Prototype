import React from 'react'
import { useEffect, useState } from 'react';
import { useCoursesContext } from '../hooks/useCoursesContext'
import { useAuthContext } from '../hooks/useAuthContext'

import CourseDetails from '../components/CourseDetails'
import CourseForm from '../components/CourseForm'

function Courses() {
  const {courses, dispatch} = useCoursesContext();
  const {user} = useAuthContext();
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      if (user?.token) {
          console.log('User', user);
          const response = await fetch('/api/courses', {
            headers: {
              'Authorization': `Bearer ${user?.token}`
            }
          })
          const json = await response.json()
    
          if (response.ok) {
            dispatch({type: 'SET_COURSES', payload: json})
          }
        }
      }

    const decodeToken = () => {
      if (user && user.token) {
        const tokenParts = user.token.split('.');
        if (tokenParts.length === 3) {
          const payload = JSON.parse(atob(tokenParts[1]));
          setUserRole(payload.role);
        }
      }
    };

    fetchCourses();
    decodeToken();
  }, [dispatch, user])

  return (
    user && 
      ((userRole === 'admin' && (
        <div className='course-page'>
          <div className="courses">
            <table className="content-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>User Id</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {courses && courses.map((course) => (
                  <CourseDetails key={course._id} course={course} />
                ))}
              </tbody>
            </table>
          </div>
          <CourseForm />
        </div>
      ))
      ||
      (userRole === 'student' && courses && (
        <div className="course-page">
          <div className="courses-grid-container">
            <header>
              <h2>Enrolled Courses</h2>
            </header>
            {courses.map((course) => (
        <div key={course._id}>
          <img src="/placeholder.png" alt="placeholder" />
          <div>
            <h3>{course.title}</h3>
            {/* <p>{course.instructor}</p> */}
            <p>{course.description}</p>
            {/* <p>{course.members} Members</p> */}
            {/* <p>{course.units} Units</p> */}
          </div>
        </div>
      ))}
          </div>
        </div>
      ))
    )
  );
}

export default Courses