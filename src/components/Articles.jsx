// import Display from "../assets/screenshot.png";
import { motion } from "framer-motion";

function Articles() {
  return (
    <section className=' bg-gray-900  px-8 py-16'>
      <div className='lg:flex  items-center'>
        <motion.div
          className='w-1/2 flex items-center'
          whileHover={{
            scale: 1.1,
            rotate: 80,
            bounce: 0.7,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 80,
            borderRadius: "100%",
            width: "full",
            bounce: 0.2,
          }}
        >
          <div className='text-5xl t text-gray-900 bg-purple-400 py-4 px-4 rounded-l-sm shadow-lg lg:flex items-center hidden'>
            <div
              aria-hidden='true'
              className='bg-gray-900 w-[20px] h-[20px] rounded-[50%] mr-2'
            />
            <span>My Articles</span>
            <div
              aria-hidden='true'
              className='bg-gray-900 w-[20px] h-[20px] rounded-[50%] ml-2'
            />
          </div>
          <div className='arrow hidden lg:block' />
        </motion.div>
        <motion.div
          className='lg:w-1/2'
          whileHover={{
            scale: 1.1,
            // rotate: 80,
            bounce: 0.7,
            // width: "100%",
          }}
        >
          <div className='grid grid-rows-2 grid-cols-2 gap-3 w-full  relative  '>
            <div className='bg-project-pic bg-cover bg-center rounded-sm py-40'></div>
            {/* Second Line */}
            <div className='bg-project-pic bg-cover bg-center rounded-sm py-40'></div>

            {/* Third Line */}
            <div className='bg-project-pic bg-cover bg-center rounded-sm py-40'></div>

            {/* Fourth line */}

            <div className='bg-project-pic bg-cover bg-center h-[] py-40 '></div>
            <div className=' bg-gray-900 w-[40px] h-[40px] rounded-[50%] absolute bottom-[47%] left-[47%]' />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Articles;
