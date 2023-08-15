import { motion, AnimatePresence } from "framer-motion";
// eslint-disable-next-line react/prop-types
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) {
    // if (!open === false) {
    // document.body.style.overflow = "hidden";
    // }
    return null;
  }

  return (
    <AnimatePresence>
      <div className='fixed inset-0 flex items-center justify-center z-50 px-4 max-width'>
        <div
          className='fixed inset-0 bg-gray-800 opacity-90 '
          onClick={onClose}
        />
        <motion.div
          className='relative '
          initial={{
            opacity: 5,
            scale: 0.2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 5,
            scale: 0.2,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
        >
          <div className='bg-white rounded-sm p-6 z-10 w-[95%] relative group'>
            <div>{children}</div>
            <span className="absolute hidden  group-hover:flex -top-2 -right-3 translate-x-full  px-2 py-2 bg-purple-300 rounded-lg text-center text-white font-light text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-purple-300 outline-none">
              Click to read this article
            </span>
          </div>
          <button
            className='bg-purple-400 hover:bg-white hover:text-red-500 text-white  font-bold text-lg py-6 px-2 lg:px-4 rounded-r-[2px] absolute left-[89%] lg:left-[92%] bottom-1/2 transition duration-1000 z-50'
            onClick={onClose}
          >
            x
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
export default Modal;
