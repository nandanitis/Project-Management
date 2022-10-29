import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';


const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [link, setLink] = useState('')
  const [error, setError] = useState(null)
  const {user} = useAuthContext()


  const handleSubmit = async (e) => {
    e.preventDefault()

    if(!user){
      setError('You must be Logged in')
      return
    }

    const workout = {title, desc, link}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${user.token}`

      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDesc('')
      setLink('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})

    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h2>Add a New Workout</h2>

      <label>Title : </label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Short Description : </label>
      <input 
        type="text" 
        onChange={(e) => setDesc(e.target.value)} 
        value={desc}
      />

      <label>Website Link : </label>
      <input 
        type="text" 
        onChange={(e) => setLink(e.target.value)} 
        value={link} 
      />

      <label >Attach File : </label>
      <input type="file" />

      <button>Add Project</button>
      
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm