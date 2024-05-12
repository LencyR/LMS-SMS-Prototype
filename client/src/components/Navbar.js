import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { MessageFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../index.css';
import { IconContext } from 'react-icons';
import { useLogout } from '../hooks/useLogout';
import DarkMode from './DarkMode';

function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [notifDropdownActive, setNotifDropdownActive] = useState(false);
    const [messageDropdownActive, setMessageDropdownActive] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showDropdown = () => setDropdownActive(!dropdownActive);
    const showNotifDropdwon = () => setNotifDropdownActive(!notifDropdownActive);
    const showMessageDropdwon = () => setMessageDropdownActive(!messageDropdownActive);

    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 800) {
                setSidebar(false);
            } else {
                setSidebar(true);
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <IconContext.Provider value={''}>
                <div className="navbar">
                    <ul>
                        <li>
                            <div className='bars-icon-container'>
                                <Link to='#' onClick={showSidebar}>
                                    <FaIcons.FaBars />
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className='navbar-logo'>
                                <img src="/laco-logo.png" alt="laco-logo" /> 
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>OnlineLearnHub</h4>
                            </div>
                        </li>
                        <li>
                            <div className='searchbar-container'>
                                <form>
                                    <div className='searchbar'>
                                        <span className='search-icon material-symbols-outlined'>search</span>
                                        <input className='searchbar-input' type='search' placeholder='Search...'/>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button onClick={showMessageDropdwon}>
                                    <MessageFilled style={{ fontSize: 19, color: messageDropdownActive ? '#1a83ff' : 'inherit' }} />
                                </button>
                                <div className={`dropdown-menu-container ${messageDropdownActive ? 'show' : ''}`}>
                                    {messageDropdownActive && (
                                        <div className="dropdown-grid-container">
                                            <div>
                                                <FaIcons.FaUserCircle style={{ fontSize: 35 }} />
                                            </div>
                                            <div>
                                                <h1>Nuqui, Jonawill</h1>
                                            </div>
                                            <div>
                                                <h2>See all Profiles</h2>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <button onClick={showNotifDropdwon}>
                                    <FaIcons.FaBell style={{ fontSize: 19, color: notifDropdownActive ? '#1a83ff' : 'inherit' }}/>
                                </button>
                                <div className={`dropdown-menu-container ${notifDropdownActive ? 'show' : ''}`}>
                                    {notifDropdownActive && (
                                        <div className="dropdown-grid-container">
                                            <div>
                                                <FaIcons.FaUserCircle style={{ fontSize: 35 }} />
                                            </div>
                                            <div>
                                                <h1>Nuqui, Jonawill</h1>
                                            </div>
                                            <div>
                                                <h2>See all Profiles</h2>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <DarkMode />
                            </div>
                        </li>
                        <li>
                            <div>
                                <button onClick={showDropdown}>
                                    <FaIcons.FaUserCircle style={{ fontSize: 35, color: dropdownActive ? '#1a83ff' : 'inherit' }} />
                                </button>
                                <div className={`dropdown-menu-container ${dropdownActive ? 'show' : ''}`}>
                                    {dropdownActive && (
                                        <div className="dropdown-grid-container">
                                            <div>
                                                <FaIcons.FaUserCircle style={{ fontSize: 35 }} />
                                            </div>
                                            <div>
                                                <h1>Nuqui, Jonawill</h1>
                                            </div>
                                            <div>
                                                <h2>See all Profiles</h2>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <nav className={sidebar ? 'hideOnMobile nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' style={{ marginTop: '70px' }}>
                        {SidebarData.map((item, index) => {
                            if (item.title === 'Logout') {
                                return (
                                    <li key={index} className={item.cName} onClick={handleClick}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;