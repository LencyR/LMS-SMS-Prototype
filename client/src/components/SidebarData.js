import React from 'react'
import {FaBook, FaCalendarAlt, FaCheckSquare, FaClipboardList, FaCog, FaFileAlt, FaHome} from 'react-icons/fa'
import { UilBooks, UilSignout } from '@iconscout/react-unicons'
import { IdcardOutlined } from '@ant-design/icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaHome style={{fontSize: 21}} />,
        cName: 'nav-text'
    },
    {
        title: 'Attendance',
        path: '/attendance',
        icon: <IdcardOutlined style={{fontSize: 21}}/>,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: '/courses',
        icon: <UilBooks />,
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
        icon: <FaBook />,
        cName: 'nav-text'
    },
    {
        title: 'Grades',
        path: '/grades',
        icon: <FaCheckSquare />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <UilSignout />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FaCog />,
        cName: 'nav-text'
    }
]