import React from 'react'
import { FaUserCircle, FaClock } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Attendance() {
  return (
    <IconContext.Provider value={{ color: '#fff '}}>
      <div className='attendance'>
        <div className="attendance-grid-container">
          <div>
            <FaUserCircle style={{ fontSize: 90, marginLeft: 15, marginTop: 20 }} />
            <h3>NUQUI, Jonawill F.</h3>
            <p className='attendance-student-course'>Computer Science - 3</p>
          </div>
          <div className='attendance-number'>
            <h2>210</h2>
            <p>No. of school days</p>
          </div>
          <div className='attendance-number'>
            <h2>210</h2>
            <p>Total Attendance</p>
          </div>
        </div>

        <header className='attendance-header'>
                <h3>Attendance History</h3>
                <h2>APRIL 2024</h2>
            </header>
        <div className="attendance-grid-container-second">
          <div>
            <h3><FaClock style={{ fontSize: 25}}/></h3>
            <span className='attendance-on-time'>On Time</span>
            <p>Time in:</p>
            <p>7:20</p>
            <p>Time out:</p>
            <p>2:30</p>
          </div>
          <div>
            <h3><FaClock style={{ fontSize: 25}}/></h3>
            <span className='attendance-on-time'>On Time</span>
            <p>Time in:</p>
            <p>7:20</p>
            <p>Time out:</p>
            <p>2:30</p>
          </div>
          <div>
            <h3><FaClock style={{ fontSize: 25}}/></h3>
            <span className='attendance-absent'>Absent</span>
            <p>Time in:</p>
            <p>----</p>
            <p>Time out:</p>
            <p>----</p>
          </div>
          <div>
            <h3><FaClock style={{ fontSize: 25}}/></h3>
            <span className='attendance-on-time'>On Time</span>
            <p>Time in:</p>
            <p>7:20</p>
            <p>Time out:</p>
            <p>2:30</p>
          </div>
          <div>
            <h3><FaClock style={{ fontSize: 25}}/></h3>
            <span className='attendance-late'>Late</span>
            <p>Time in:</p>
            <p>7:40</p>
            <p>Time out:</p>
            <p>2:30</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Attendance