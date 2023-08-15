import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Hero() {
  const { ref, inView } = useInView();
  const animationDot = useAnimation();
  const animationBounce = useAnimation();

  useEffect(() => {
    if (inView) {
      animationDot.start({
        y: 70,
        transition: {
          type: "spring",
          duration: 7,
          bounce: 0.2,
        },
      }),
        animationBounce.start({
          y: 50,
          transition: {
            type: "spring",
            duration: 5,
            bounce: 0.2,
          },
        });
    }
    if (!inView) {
      animationDot.start({ y: 0 });
      animationBounce.start({ y: 10 });
    }
  }, [inView]);

  return (
    <section className=' bg-gray-900  '>
      <div className='lg:grid grid-cols-3 justify-between items-center py-[15rem] max-width'>
        <div className='lg:space-y-40 space-y-10' ref={ref}>
          <h1 className='text-4xl text-white font-bold'>
            <span className='text-7xl font-extralight'>O</span>
            tuekong <span className='te text-7xl font-extralight'>I</span>
            dongesit{" "}
            <motion.span className='text-8xl  ' animate={animationBounce}>
              .
            </motion.span>
          </h1>
          <p></p>
        </div>
        <motion.div animate={animationDot} ref={ref} className=' '>
          <p className='text-[8rem] font-extrabold  py-20 space-x-4'>
            <span className='text-purple-400'>&#123;</span>
            <span className='text-purple-500'>&#124;</span>
            <span className='text-purple-500'>&#124;</span>
            <span className='text-purple-500'>&#125;</span>
          </p>
        </motion.div>
        <div className=' flex flex-col space-y-8 self-end sm:mt-10'>
          <h2 className='text-4xl text-white  font-semibold'>
            Frontend Developer
          </h2>
          <p className="lg:w-[70%] pr-4 text-slate-300  text-2xl lg:before:content-['//']  lg:after:content-['//'] flex">
            Technical writer and sometimes messes around with new tech.
          </p>
          <div>
            <Link
              to='contact'
              className='bg-purple-400 px-6 py-2 text-white rounded-sm  shadow-sm shadow-purple-200'
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
