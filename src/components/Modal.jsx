

// eslint-disable-next-line react/prop-types
function Modal({ children, isOpen, onClose }) {
  
  if (!isOpen) {
    // if (!open === false) {
    // document.body.style.overflow = "hidden";
    // }
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 px-4'>
      <div
        className='fixed inset-0 bg-gray-500 opacity-75 '
        onClick={onClose}
      />
      <div className='relative'>
        <div className='bg-white rounded-sm p-6 z-10 '>
          <div>
            {children}
          </div>
        </div>
        <button
          className='bg-purple-400 hover:bg-white hover:text-gray-900 text-white  font-bold text-lg py-6 px-4 rounded-r-[2px] absolute left-[98%] bottom-1/2 transition duration-1000'
          onClick={onClose}
        >
          x
        </button>
      </div>
    </div>
  );
}
export default Modal;
