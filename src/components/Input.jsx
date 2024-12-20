import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTask } from '../hooks/useTask'

export function Input(){
    const [query, setQuery] = useState('')
    const [error, setError] = useState('')
    const { addTask } = useTask()

    const handleInputChange = event=> {
        setError('')
        if(event.target.value === ' ' && query.length===0) return
        
        setQuery(event.target.value)
    }

    const handleSubmit = event=> {
        event.preventDefault()
        if(event.target.tasker.value.length>30) return setError('Task name too long')
        if(event.target.tasker.value.length<3) return setError('Task name too short')
        if (query.length===0) return setError('Task name cannot be empty')

        addTask({ title: event.target.tasker.value, id: uuidv4() })
        setQuery('')
    }

    return (
        <>
        <form className="app-form" onSubmit={handleSubmit}>
            <input type="text" name="tasker" placeholder="Add Task..." value={query} onChange={handleInputChange}/>
            <button type="submit">+</button>
        </form>
        <div style={{height: '50px'}}>{error && <p style={{color: '#f00'}}>{error}</p>}</div>
        </>
    )
}