import React from 'react'
import {FaBook, FaCalendarAlt, FaCheckSquare, FaClipboardList, FaCog, FaDoorClosed, FaFileAlt, FaHome} from 'react-icons/fa'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Attendance',
        path: '/attendance',
        icon: <FaClipboardList />,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaFileAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Events',
        path: '/events',
        icon: <FaCalendarAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Classes',
        path: '/classes',
        icon: <FaDoorClosed />,
        cName: 'nav-text'
    },
    {
        title: 'Grades',
        path: '/grades',
        icon: <FaCheckSquare />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaCog />,
        cName: 'nav-text'
    }
]