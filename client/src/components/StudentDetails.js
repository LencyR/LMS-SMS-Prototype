import { useStudentsContext } from '../hooks/useStudentsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {FaTrash} from 'react-icons/fa'

const StudentDetails = ({ student }) => {
    const { dispatch } = useStudentsContext()
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/students/' + student._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_STUDENT', payload: json})
        }
    }

    return (
        <tr>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.address}</td>
            <td>{formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}</td>
            <td><span className='delete-button' onClick={handleClick}><FaTrash style={{ position: 'relative', left: '-10px', bottom: '10px'}}/></span></td>
        </tr>
    )
}

export default StudentDetails