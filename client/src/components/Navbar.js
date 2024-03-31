import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../index.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const showDropdown = () => setDropdownActive(!dropdownActive);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className='website-name'>
                        <h4>OnlineLearnHub</h4>
                    </div>
                    <div className='searchbar'>
                        <FaIcons.FaSearch style={{ color: 'black', fontSize: 14 }} />
                        <input className='searchbar-input' type='search' placeholder='Search...'/>
                    </div>
                    <div className='notification'>
                        <FaIcons.FaBell />
                    </div>
                    <div className='user-profile'>
                        <button onClick={showDropdown}>
                            <FaIcons.FaUserCircle style={{ fontSize: 25 }} />
                        </button>
                        <div className={`dropdown-menu-container ${dropdownActive ? 'show' : ''}`}>
                            {dropdownActive && (
                                <ul className='dropdown-menu'>
                                    <li><a href="">Profile</a></li>
                                    <li><a href="">Setting</a></li>
                                    <li><a href="">Log Out</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;