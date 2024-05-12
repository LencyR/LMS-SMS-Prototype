import React, { useState } from 'react'
import { ChromeFilled, } from '@ant-design/icons';
import { FaSafari } from 'react-icons/fa';

function Settings() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className='settings'>
      <header className='settings-header'>
        <h3>Settings</h3>
      </header>
      <div className="settings-grid-container">
        <div>
          <ul>
            <li className={toggleState === 1 ? 'tabs settings-active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>EDIT PROFILES</li>
            <li className={toggleState === 2 ? 'tabs settings-active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>PASSWORD</li>
            <li className={toggleState === 3 ? 'tabs settings-active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>NOTIFICATIONS</li>
            <li className={toggleState === 4 ? 'tabs settings-active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>YOUR SESSIONS</li>
          </ul>
        </div>
        <div className={toggleState === 1 ? 'content active-content settings-grid-container-second' : 'content settings-grid-container-second'}>
          <h1>EDIT PROFILES</h1>
          <img src="/profile-icon.png" alt="profile icon" />
          <div className='avatar-upload-image'>
            <h2>AVATAR</h2>
            <button>UPLOAD IMAGE</button>
          </div>
          <div className='settings-form-first'>
            <p>FIRST NAME</p>
            <input type="text" />
          </div>
          <div className="settings-form">
            <p>MIDDLE NAME</p>
            <input type="text" />
          </div>
          <div className="settings-form-third">
            <p>LAST NAME</p>
            <input type="text" />
          </div>
          <div className="settings-form-fourth">
            <p>USER NAME</p>
            <input type="text" />
          </div>
          <div className="settings-form-fifth">
            <p>EMAIL</p>
            <input type="text" />
          </div>
          <button>SAVE CHANGES</button>
          <div>
            <button>DELETE ACCOUNT</button>
          </div>
        </div>
        <div className={toggleState === 2 ? 'content active-content settings-grid-container-second' : 'content settings-grid-container-second'}>
          <h1>PASSWORD</h1>
          <div className="settings-form-page-2">
            <p>OLD PASSWORD</p>
            <input type="password" />
          </div>
          <div className="settings-form-page-2">
            <p>NEW PASSWORD</p>
            <input type="password" />
          </div>
          <div className="settings-form-page-2">
            <p>CONFIRM NEW PASSWORD</p>
            <input type="password" />
          </div>
          <button className='settings-page-2-confirm'>SAVE CHANGES</button>
        </div>
        <div className={toggleState === 3 ? 'content active-content settings-grid-container-second' : 'content settings-grid-container-second'}>
          <h1>NOTIFICATIONS</h1>
          <div className='settings-form-page-3'>
            <p>Turn on notifications?</p>
            <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
            </label>
          </div>
          <button className='settings-page-3-confirm'>SAVE CHANGES</button>
        </div>
        <div className={toggleState === 4 ? 'content active-content settings-grid-container-second' : 'content settings-grid-container-second'}>
          <h1>SESSIONS</h1>
          <div className='settings-form-page-4'>
            <p>DEVICES</p>
          </div>
          <div className="settings-page-4-grid-container">
              <div>
                <ChromeFilled style={{fontSize: 50}} />
              </div>
              <div className='session-settings'>
                <p>Chrome on Iphone</p>
                <p>222.225.225.222</p>
                <p>Signed in Nov 17, 2022</p>
              </div>
              <button className='settings-revoke'>REVOKE</button>          
          </div>
          <div className="settings-page-4-grid-container">
              <div>
                <ChromeFilled style={{fontSize: 50}} />
              </div>
              <div className='session-settings'>
                <p>Chrome on MacBook Pro</p>
                <p>222.225.225.222</p>
                <p>Signed in Dec 16, 2023</p>
              </div>
              <button className='settings-revoke'>REVOKE</button>          
          </div>
          <div className="settings-page-4-grid-container">
              <div>
                <FaSafari style={{fontSize: 50, marginLeft: 17}} />
              </div>
              <div className='session-settings'>
                <p>Safari on MacBook Pro</p>
                <p>222.225.225.222</p>
                <p>Signed in March 23, 2024</p>
              </div>
              <button className='settings-revoke'>REVOKE</button>
          </div>
          <button className='settings-page-4-confirm'>SIGN OUT ALL DEVICES</button>
        </div>
      </div>
    </div>
  )
}

export default Settings