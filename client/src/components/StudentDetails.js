import { useStudentsContext } from '../hooks/useStudentsContext'
import {FaTrash} from 'react-icons/fa'

const StudentDetails = ({ student }) => {
    const { dispatch } = useStudentsContext()

    const handleClick = async () => {
        const response = await fetch('/api/students/' + student._id, {
            method: 'DELETE'
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
            <td>{student.createdAt}</td>
            <td><span className='delete-button' onClick={handleClick}><FaTrash style={{ position: 'relative', left: '-20px', bottom: '10px'}}/></span></td>
        </tr>
    )
}

export default StudentDetails