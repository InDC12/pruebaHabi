import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'


function HabiDirection() {
    const [task,setTask] = useState({
        title:'Direccion'
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setTask({
            ... task,
            [e.target.name]:e.target.value,
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( addTask(
            {
                ...task,
                id: uuid()
            },
            navigate('/pisoApt')
        ))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Direccion</h3>
            <input name="description" type="text" onChange={handleChange} />
            <hr />
            <button>Siguiente</button>
            <hr />
        </form>
    )
}
export default HabiDirection