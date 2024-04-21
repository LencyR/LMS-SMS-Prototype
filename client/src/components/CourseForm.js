import { useState } from "react";
import { useCoursesContext } from '../hooks/useCoursesContext'
import { useAuthContext } from "../hooks/useAuthContext";

const CourseForm = () => {
    const { dispatch } = useCoursesContext()
    const { user } = useAuthContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        if (user.role !== 'admin') {
            setError('Only admin can add courses.');
            return;
        }

        const course = {title, description}

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setDescription('')
            setEmptyFields([])
            console.log('new course added:', json)
            dispatch({type: 'CREATE_COURSE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Course</h3>
            
            <label>Course Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Course Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className={emptyFields.includes('description') ? 'error' : ''}
            />

            <button>Add Course</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default CourseForm