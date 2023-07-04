/* eslint-disable react/jsx-key */
// import SkillsCards from "./SkillsCards";
import { logos } from "./data";

function Skills() {
  return (
    <section className=' bg-gray-950 h-1/2 px-8 py-20'>
      <h2 className='text-center text-2xl text-white font-bold py-4 '>
        Tools I use
      </h2>
      <div className='grid lg:grid-cols-4 gap-10  items-center  py-8'>
        {logos.map((logo) => {
          return (
            <div
              className='bg-gray-900 rounded-sm flex flex-col justify-center items-center space-y-3 text-center  h-fit py-8'
              key={logo.id}
            >
              <img src={logo.image} alt={logo.name} width='50px' />
              <p className='text-white px-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
