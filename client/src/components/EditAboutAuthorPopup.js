import React, { useState } from 'react';

function EditAboutAuthorPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="text-xl font-normal text-yellow-500">Edit</button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-30" onClick={handleClose}></div>
          <div className="z-10 w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow-inherit">
            <form id="editmodal" className="w-full">
              <div className="flex flex-col items-center mb-6">
                <label className="block mb-1 text-lg font-bold text-gray-500" htmlFor="about_author">
                  About Author
                </label>
                <textarea
                  className="w-full px-4 py-2 text-lg text-gray-700 bg-gray-200 border-2 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-purple-500"
                  id="about_author"
                  defaultValue=""
                  rows={8}
                />
              </div>
            </form>
            <div className="text-right">
              <button
                onClick={handleClose}
                className="px-4 py-2 mr-2 text-lg font-bold text-white rounded bg-slate-400 hover:bg-slate-500"
              >
                Close
              </button>
              <button
                className="px-4 py-2 text-lg font-bold text-white bg-[#BF5A36] rounded hover-bg-yellow-800"
                form="editmodal"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditAboutAuthorPopup;
