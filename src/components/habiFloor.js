import {useState} from 'react';
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'

function HabiFloor() {
    const min = 1;
    const max = 50;
  
    const [value, setValue] = useState(1);
    const [error, setError] = useState(null);
    const [task,setTask] = useState({
          title:'Piso Del Apartamento'
          })
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const handleChange = e => {
    const value = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(value);
    setTask({
        ... task,
        [e.target.name]:e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setError(null);
    console.log( value)

    if (value <= 50) {
        dispatch( addTask(
            {
                ...task,
                id: uuid()
            },
            navigate('/direccion')
        ))
    } else {
      setError('Piso No Valido');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Piso Del Apartamento</h3>
        <input name="description" type="number" value={value} onChange={handleChange}
        />
        <hr />
        <button type="submit">Siguiente</button>
        <hr />
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      </form>
    </div>
  );
}
export default HabiFloor