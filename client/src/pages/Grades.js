import React, { useState } from 'react'

function Grades() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='grades'>
      <header className='grades-header'>
        <h2>GRADES - </h2>
        <h3>CS 3</h3>
        <h1>ACADEMIC YEAR 2022</h1>
      </header>
      <div className="grades-grid-container">
        <header>
          <h2 className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>FIRST SEMESTER</h2>
          <h1 className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>SECOND SEMESTER</h1>
        </header>
        <table className={toggleState === 1 ? 'content active-content grades-table' : 'content grades-table'}>
          <thead>
            <tr>
              <th>SUBJECTS</th>
              <th>UNITS</th>
              <th>PRELIM</th>
              <th>MIDTERMS</th>
              <th>FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 <strong>LIFE AND WORKS OF RIZAL</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2 <strong>STATISTICS</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3 <strong>INFORMATION MANAGEMENT 1</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4 <strong>OBJECT ORIENTED PROGRAMMING</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5 <strong>LITURGY AND SACRAMENTS</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6 <strong>ETHICS</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7 <strong>ALGORITHM AND COMPLEXITY</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8 <strong>GWA</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className={toggleState === 2 ? 'content active-content grades-table' : 'content grades-table'}>
          <thead>
            <tr>
              <th>SUBJECTS</th>
              <th>UNITS</th>
              <th>PRELIM</th>
              <th>MIDTERMS</th>
              <th>FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 <strong>FUNDAMENTALS OF DATABASE SYSTEM</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2 <strong>SOFTWARE ENGINEERING 1</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3 <strong>SOCIAL ISSUES AND PROFESSIONAL <br /> PRACTICE</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4 <strong>PROGRAMMING LANGUAGES</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5 <strong>SYSTEM FUNDAMENTALS</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6 <strong>SYSTEM ANALYSIS AND DESIGN</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7 <strong>FOREIGN LANGUAGE</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8 <strong>GWA</strong></td>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <footer></footer>
      </div>
    </div>
  )
}

export default Grades