import Modal from "./habiModal"
import { useModal } from "../hooks/useModal"

const Modals = () => {
  const [isOpen,openModal,closeModal] = useModal(false)
  return(
    <div className="modal-manager">
        <button onClick={openModal}>Resumen</button>
        <Modal isOpen ={isOpen} closeModal={closeModal}/>
    </div>
  )
}

export default Modals

