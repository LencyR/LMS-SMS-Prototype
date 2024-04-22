import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../index.css';
import { IconContext } from 'react-icons';
import { useLogout } from '../hooks/useLogout';

function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const [dropdownActive, setDropdownActive] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showDropdown = () => setDropdownActive(!dropdownActive);

    const { logout } = useLogout()
    const handleClick = () => {
        logout()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
                <div className="navbar">
                    <ul>
                        <li>
                            <div>
                                <Link to='#'>
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
                                <FaIcons.FaBell />
                            </div>
                        </li>
                        <li>
                            <div>
                                <button onClick={showDropdown}>
                                    <FaIcons.FaUserCircle style={{ fontSize: 25 }} />
                                </button>
                                <div className={`dropdown-menu-container ${dropdownActive ? 'show' : ''}`}>
                                    {dropdownActive && (
                                        <ul className='dropdown-menu'>
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Setting</a></li>
                                            <li><a href="#">Log Out</a></li>
                                        </ul>
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