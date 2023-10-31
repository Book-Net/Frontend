import React, { useState } from 'react';

function EditPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} className="text-xl font-normal text-yellow-500">Edit</button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-30" onClick={handleClose}></div>
          <div className="z-10 w-full max-w-md p-4 mx-auto bg-white rounded-md shadow-md">
            <form id="editmodal" className="w-full">
              <div className="mb-6">
                <label className="block mb-4 font-bold text-gray-500" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  defaultValue=""
                />
              </div>
            </form>
            <div className="text-right">
              <button
                onClick={handleClose}
                className="px-4 py-2 mr-2 font-bold text-white rounded bg-slate-400 hover:bg-slate-500"
              >
                Close
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-[#BF5A36] rounded hover-bg-yellow-800"
                form="editmodal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditPopup;
