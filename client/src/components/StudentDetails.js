import { useStudentsContext } from '../hooks/useStudentsContext'

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
        <div className="student-details">
            <h4>Student Details:</h4>
            <p><strong>Name: </strong>{student.name}</p>
            <p><strong>Age: </strong>{student.age}</p>
            <p><strong>Email: </strong>{student.email}</p>
            <p><strong>Address: </strong>{student.address}</p>
            <p>{student.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default StudentDetails