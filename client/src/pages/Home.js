import React from 'react'

function Home() {
  return (
    <>
      <div className="home">
        <div className='label'>
          <h3><span><strong>Classes Today</strong></span> <span><a href="#">See all</a></span></h3>
        </div>
        <div className='card-container'>
          <div className="card">
            {/* <img src="/placeholder.png" alt="placeholder" /> */}
            <div className="card-content">
              <h3>Programming Languages</h3>
              <br /><br /><br />
              <p>Sir. Arvin<br />1:00 - 4:00</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Fundamentals of Database System</h3>
              <br /><br /><br />
              <p>Sir. Iyel<br />7:30 - 10:30</p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Foreign Language</h3>
              <br /><br /><br /><br /><div className='linebreak'></div>
              <p>Ms. Beth<br />10:30 - 12:00</p>
            </div>
          </div>
        </div>

        <div className='card-container-third'>
          <div className="card-third">
            <div className="card-content">
              <h3>Tasks</h3>
              <ul>
                <li>Chapter 1 - 3 Submission Today</li>
                <li>Programming Languages - Essay</li>
                <li>Foreign Language - Practice Writing</li>
                <li>Social Issues - Reporting</li>
                <li>Software Engineering - Recitation</li>
              </ul>
            </div>
          </div>
        </div>

        <span className='label-courses'><strong>Courses</strong> <span><a href="#">See all</a></span></span> 
        <div className='card-container-fourth'>
          <div className="card-fourth">
            <div className="card-content">
              <br />
              <h3>System Fundamentals</h3>
              <br />
            </div>
          </div>
          
          <div className="card-fourth">
            <div className="card-content">
              <br />
              <h3>Software Engineering</h3>
              <br />
            </div>
          </div>
        </div>

        <div className='label-events-container'>
          <span className='label-events'><strong>Upcoming Events</strong></span>
        </div>
        <div className='card-container-second'>
          <div className="card-second">
            <div className="card-content">
              <h3>First Friday Mass</h3>
              <p>7:30 AM - 4:00 | March 1, 2024</p>
            </div>
          </div>
          <div className="card-second">
            <div className="card-content">
              <h3>Recollection - Colleges</h3>
              <p>7:30 AM | March 8, 2024</p>
            </div>
          </div>
          <div className="card-second">
            <div className="card-content">
              <h3>Retreat 4th Year College</h3>
              <p>6:00 AM | March 15, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home