import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'


function HabiName() {
    const [task,setTask] = useState({
        title:'Nombre y Apellido'
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
            navigate('/email')
        ))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Nombre Y Apellido</h3>
            <input name="description" type="text" placeholder="Nombre" onChange={handleChange} />
            <hr />
            <button>Siguiente</button>
            <hr />
        </form>
    )
}
export default HabiName