import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'
import "./mainHabiApp.css"


function HabiAditionals() {
    const [task,setTask] = useState({
        title:'Zonas Comunes'
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
            navigate('/resume')
        ))
    }

    return (
        <form onSubmit={handleSubmit} className="zones">
            <h3>Zonas Comunes</h3>
            <input name="description" type="checkbox" placeholder="Nombre" onChange={handleChange} value="ZonaBQ"/>
            <p>ZonaBQ</p>
            <input name="description2" type="checkbox" placeholder="Nombre" onChange={handleChange} value="Salon Comunal"/>
            <p>Salon Comunal</p>
            <input name="description3" type="checkbox" placeholder="Nombre" onChange={handleChange} value="Parque de juego"/>
            <p>Parque De Juegos</p>
            <hr />
            <button>Finalizar</button>
            <hr/>
            <p>Paso 5 de 5</p>
            <progress value={1}/>
            <hr />
        </form>
    )
}
export default HabiAditionals