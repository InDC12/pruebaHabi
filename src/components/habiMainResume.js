import { useSelector} from "react-redux";

function HabiMainResume () {
    const habiMainResume = useSelector(state => state.counter)

    return (
        <div>
            <header>
                <h1>Datos Introducidos por el Usuario</h1>
            </header>
            <hr/>
            {habiMainResume.map(habiMainresume => (
                <div key={habiMainresume.id}>
                    <h3>{habiMainresume.title}</h3>
                    <p>{habiMainresume.description}</p>
                    <p>{habiMainresume.description2}</p>
                    <p>{habiMainresume.description3}</p>
                </div>
            ))}
            <hr/>
            <a href="/nombres">Terminar</a>
            
        </div>
        
    )
}
export default HabiMainResume