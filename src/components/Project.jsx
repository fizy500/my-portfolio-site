import { motion } from "framer-motion";

import Article from "../assets/article.jpg";
function Project() {
  return (
    <section className='px-8 py-16 flex items-center justify-between bg-gray-950'>
      <div className='grid grid-cols-2 grid-rows-2 gap-3 lg:w-1/2'>
        <div className=' bg-green-500  rounded-sm  py-4 px-4'>
          <img src={Article} alt='photo' height='20px' className='rounded-sm' />
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
            facere libero error ullam excepturi eveniet dolorem eligendi,
            delectus neque velit aliquid maxime odio ipsa a assumenda fuga culpa
            tenetur.
          </p>
        </div>
        <div className=' bg-indigo-600  rounded-sm py-4 px-4'>
          <img src={Article} alt='photo' height='20px' className='rounded-sm' />
          <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
            facere libero error ullam excepturi eveniet dolorem eligendi,
            delectus neque velit aliquid maxime odio ipsa a assumenda fuga culpa
            tenetur.
          </p>
        </div>
        <div className=' bg-violet-800  rounded-sm py-4 px-4'></div>
        <div className=' bg-indigo-950 rounded-sm py-4 px-4'></div>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className=' items-center lg:w-1/2 hidden lg:flex'>
          <div className='arrow2 hidden lg:block' />
          <div className='text-5xl  text-gray-900 bg-purple-400 py-4 px-4 rounded-l-sm shadow-lg lg:flex items-center hidden'>
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
        </div>
      </motion.div>
    </section>
  );
}

export default Project;
