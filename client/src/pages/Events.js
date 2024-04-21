import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Events() {
  return (
    <IconContext.Provider value={{ color: '#fff '}}>
      <div className='events'>
        <header>
          <h2>ONGOING EVENTS</h2>
          <h4><FaCalendarAlt style={{ fontSize: 25}}/></h4>
        </header>
        <div className="events-grid-container">
          <div>
            <h3>Group meeting</h3>
            <p>April 1, 2024 - 10:30 to 12:00 PM</p>
            <p>250 Members</p>
          </div>
          <div>
            <h3>Department meeting</h3>
            <p>April 5, 2024 - 7:30 to 9:00 AM</p>
            <p>30 Members</p>
          </div>
        </div>

        <header>
          <h2>UPCOMING EVENTS</h2>
          <h3><FaCalendarAlt style={{ fontSize: 25}}/></h3>
        </header>
        <div className="events-grid-container-second">
          <div>
            <div>
              <h1>5</h1>
              <h5>April</h5>
            </div>
            <h3>First Friday Mass</h3>
            <p>6:30 to 8:00 AM</p>
            <p>LCCBinan @ Gym</p>
            <p>All Colleges</p>
          </div>
          <div>
            <div>
              <h1>19</h1>
              <h5>April</h5>
            </div>
            <h3>Recollection</h3>
            <p>6:30 to 12:00 PM</p>
            <p>LCCBinan @ Mini Hotel</p>
            <p>All 3rd Yr.</p>
          </div>
          <div>
            <div>
              <h1>3</h1>
              <h5>May</h5>
            </div>
            <h3>Team Building</h3>
            <p>6:30 to 12:00 Pm</p>
            <p>LCCBinan College Building</p>
            <p>All Colleges</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default Events