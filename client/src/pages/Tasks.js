import React from 'react'

function Tasks() {
  return (
    <div className='tasks'>
      <header>
          <h2>TO DO:</h2>
      </header>
      <div className="tasks-grid-container">
        <div>
          <h3>Homework</h3>
        </div>
        <div>
          <h3>Projects</h3>
        </div>
        <div>
          <h3>Activity</h3>
        </div>
      </div>
      <header>
          <h2>UPCOMING:</h2>
        </header>
      <div className="tasks-grid-container">
        <div>
          <h3>Homework</h3>
        </div>
        <div>
          <h3>Projects</h3>
        </div>
        <div>
          <h3>Activity</h3>
        </div>
      </div>
      <header>
          <h2>EXAMS:</h2>
        </header>
      <div className="tasks-grid-container">
        <div>
          <h3>Prelims</h3>
        </div>
        <div>
          <h3>Midterm</h3>
        </div>
        <div>
          <h3>Finals</h3>
        </div>
      </div>
    </div>
  )
}

export default Tasks