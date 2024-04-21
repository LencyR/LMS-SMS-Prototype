import { useCoursesContext } from '../hooks/useCoursesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {FaTrash} from 'react-icons/fa'

const CourseDetails = ({ course }) => {
    const { dispatch } = useCoursesContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/courses/' + course._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COURSE', payload: json})
        }
    }
    
    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.user_id}</td>
            <td>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</td>
            <td><span className='delete-button' onClick={handleClick}><FaTrash style={{ position: 'relative', left: '-10px', bottom: '10px'}}/></span></td>
        </tr>
    )
}

export default CourseDetails;