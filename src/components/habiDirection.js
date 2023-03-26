import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'
import "./mainHabiApp.css"


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
        <form onSubmit={handleSubmit} className='direction'>
            <h3>Direccion</h3>
            <input name="description" type="text" onChange={handleChange} />
            <hr />
            <button>Siguiente</button>
            <hr/>
            <p>Paso 3 de 5</p>
            <progress value={0.50}/>
            <hr />
        </form>
    )
}
export default HabiDirection