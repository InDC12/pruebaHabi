import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/counter/counterSlice"
import { Link } from 'react-router-dom'

function HabiResume () {
    const habiResume = useSelector(state => state.counter)
    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            {habiResume.map(habiresume => (
                <div key={habiresume.id}>
                    <h3>{habiresume.title}</h3>
                    <p>{habiresume.description}</p>
                    <button onClick={() => handleDelete(habiresume.id) }>Delete</button>
                </div>
            ))}
        </div>
    )
}
export default HabiResume