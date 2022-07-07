import React from "react";

const MyModal = ({visible, setShowModal, img}) => {
    if (!visible) return null;
  const handleClose = (e)=> {
       if(e.target.id === "container" || e.target.id === "close") setShowModal(false);
  };
  return (
    <div id="container" onClick={handleClose}  className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
    <div className="relative">
    <img
      src={img}
      className="rounded shadow-lg h-[75vh] w-[95vh]"
    />
          <button id="close" onClick={handleClose}  className="absolute top-1 left-1 px-2 py-1 bg-slate-600 bg-opacity-40 hover:bg-opacity-50 text-white rounded">
            Close
          </button>
    </div>
    </div>
  );
}

export default MyModal;