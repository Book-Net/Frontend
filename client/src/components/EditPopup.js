import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button onClick={handleShow} >Edit</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='editmodal' className="w-full max-w-sm">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" for="name">
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue="Jane Doe"/>
            </div>
          </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="px-4 py-2 font-bold text-white rounded bg-slate-400 hover:bg-slate-500" onClick={handleClose}>Close</button>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" form="editmodal">Confirm</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPopup;