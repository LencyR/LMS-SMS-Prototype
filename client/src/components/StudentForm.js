import { useState } from "react";
import { useStudentsContext } from '../hooks/useStudentsContext'

const StudentForm = () => {
    const { dispatch } = useStudentsContext()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const student = {name, age, email, address}

        const response = await fetch('/api/students', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setName('')
            setAge('')
            setEmail('')
            setAddress('')
            setEmptyFields([])
            console.log('new student added:', json)
            dispatch({type: 'CREATE_STUDENT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Student</h3>
            
            <label>Student Name:</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error' : ''}
            />

            <label>Student Age:</label>
            <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                className={emptyFields.includes('age') ? 'error' : ''}
            />
            
            <label>Student Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={emptyFields.includes('email') ? 'error' : ''}
            />
            
            <label>Student Address:</label>
            <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={emptyFields.includes('address') ? 'error' : ''}
            />

            <button>Add Student</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default StudentForm