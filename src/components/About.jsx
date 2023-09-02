import HomeLink from "./HomeLink";
import Otuekong from "../assets/otuekong.jpg";

export default function About() {
  return (
    <section className='bg-gray-900  '>
      <div className='flex flex-col items-center max-width h-full'>
        <div className='border border-dotted border-purple-400 rounded-sm w-full  py-40 lg:px-8 my-40 relative'>
          <div className='bg-white rounded-sm shadow-2xl  py-6 gap-3'>
            <div className='flex flex-col items-center justify-center py-10'>
              <img
                src={Otuekong}
                alt='otuekong arthur'
                className='w-40 h-40 rounded-full border-2 border-gray-900 -mt-40 object-cover'
              />
              <p className='first-letter:text-3xl first-letter:text-purple-400 py-3 px-6 text-gray-950 text-lg columns-1 lg:columns-2 '>
                I am a frontend web developer using HTML,CSS,Javascript,React to
                bring User interfaces and functionalities to life. When not
                coding,i prefer the solitude of my mind or listening to Fela
                Kuti`s Afrobeat or moving my head to the exhilarating rythm of
                electronic dance music (edm).
              </p>
            </div>
          </div>
          <HomeLink position={"bottom-[93%] left-[90%]"} />
        </div>
      </div>
    </section>
  );
}
