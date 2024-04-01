import React from 'react'
import { useEffect } from 'react';
import { useStudentsContext } from '../hooks/useStudentsContext'
import StudentDetails from '../components/StudentDetails'
import StudentForm from '../components/StudentForm'

function Home() {
  const {students, dispatch} = useStudentsContext()

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/api/students')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_STUDENTS', payload: json})
      }
    }

    fetchStudents()
  }, [])

  return (
    <div className='home'>
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
      <StudentForm />
    </div>
  );
}

export default Home;