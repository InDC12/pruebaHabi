import {useState} from 'react';
import { useDispatch } from "react-redux"
import { addTask } from "../features/counter/counterSlice"
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'

function HabiEmail() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [task,setTask] = useState({
    title:'Email'
})
const dispatch = useDispatch()
const navigate = useNavigate()

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = e => {
    setEmail(e.target.value);
    setTask({
        ... task,
        [e.target.name]:e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
        dispatch( addTask(
            {
                ...task,
                id: uuid()
            },
            navigate('/direccion')
        ))
    } else {
      setError('Email No Valido');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Email</h3>
        <input name="description"value={email} onChange={handleChange}/>
        <hr />
        <button type="submit">Siguiente</button>
        <hr />
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      </form>
    </div>
  );
}
export default HabiEmail
