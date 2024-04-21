import React from 'react'
import { useEffect, useState } from 'react';
import { useStudentsContext } from '../hooks/useStudentsContext'
import { useAuthContext } from '../hooks/useAuthContext'

import StudentDetails from '../components/StudentDetails'
import StudentForm from '../components/StudentForm'

function Students() {
  const {students, dispatch} = useStudentsContext()
  const {user} = useAuthContext()
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
        if(user?.token) {
            console.log('User', user);
            const response = await fetch('/api/students', {
              headers: {
                'Authorization': `Bearer ${user?.token}`
              }
            })
            const json = await response.json()
      
            if (response.ok) {
              dispatch({type: 'SET_STUDENTS', payload: json})
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

    fetchStudents();
    decodeToken();
  }, [dispatch, user])

  return (
    <div className='students-page'>
      <div>
        {<p>User Role: {userRole}</p>}
      </div>
      <div className='students'>
        <table className='content-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students && students.map((student) => (
              <StudentDetails key={student._id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
      {(user && userRole === 'admin') && <StudentForm />}
    </div>
  );
}

export default Students;