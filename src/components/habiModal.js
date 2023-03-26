import { useSelector } from "react-redux";
import "./modal.css"


 const Modal = ({isOpen,closeModal}) => {
    const habiResume = useSelector(state => state.counter)

    const handleContainerClick = e => e.stopPropagation();

    return(
        <div className="modal-v"  onClick={closeModal}>
            <div className={`modal ${isOpen && "is-open"}`}>
                <div className="modal-container" onClick={handleContainerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                    <div>
                        {habiResume.map(habiresume => (
                        <div key={habiresume.id}>
                            <h3>{habiresume.title}</h3>
                            <p>{habiresume.description}</p>
                            <p>{habiresume.description2}</p>
                            <p>{habiresume.description3}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
 }
 
 export default Modal