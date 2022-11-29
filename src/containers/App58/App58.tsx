import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App58() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const cancel = () => setShowModal(false);

  return (
    <div className="App" style={{padding: "10px"}}>
      <Modal show={showModal} title="Order" onClose={cancel}>
        <div className="modal-body">Content</div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </div>
      </Modal>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show demo modal</button>
      <Alert show={showAlert} type="warning" onDismiss={() => setShowAlert(false)}>This is a warning type alert</Alert>
      <Alert show={true} type="success">This is a success type alert</Alert>
      <Alert show={true} type="primary">This is a warning type alert</Alert>
      <Alert show={showAlert2} type="danger" onDismiss={() => setShowAlert2(false)}>This is a success type alert</Alert>
    </div>
  );
}

export default App58;
