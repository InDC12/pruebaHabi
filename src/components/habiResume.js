import { useSelector, useDispatch } from "react-redux";
import "./mainHabiApp.css"

function HabiResume () {
    const habiResume = useSelector(state => state.counter)

    return (
        <div className="steps-done">
            {habiResume.map(habiresume => (
                <div key={habiresume.id}>
                    <h3>{habiresume.title}</h3>
                    <p>{habiresume.description}</p>
                    <p>{habiresume.description2}</p>
                    <p>{habiresume.description3}</p>
                </div>
            ))}
        </div>
    )
}
export default HabiResume