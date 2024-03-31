import { useState } from "react";
import { useStudentsContext } from '../hooks/useStudentsContext'

const StudentForm = () => {
    const { dispatch } = useStudentsContext()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState(null)

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
        }
        if (response.ok) {
            setError(null)
            setName('')
            setAge('')
            setEmail('')
            setAddress('')
            console.log('new student added:', json)
            dispatch({type: 'CREATE_STUDENT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Student</h3>
            
            <label>Student Name:</label>
            <input className="form-input"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <label>Student Age:</label>
            <input className="form-input"
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />
            
            <label>Student Email:</label>
            <input className="form-input"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            
            <label>Student Address:</label>
            <input className="form-input"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />

            <button>Add Student</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default StudentForm