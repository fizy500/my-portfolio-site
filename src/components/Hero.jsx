import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";

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
    <section className=' bg-gray-900 lg:grid grid-cols-3 justify-between items-center px-8 py-[15rem] '>
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
        <button className=' text-yellow-900 border-2 border-yellow-900 px-2 py-2 w-52 rounded-sm'>
          Contact me
        </button>
      </div>
      <motion.div animate={animationDot} ref={ref} className=' '>
        <p className='text-[8rem] font-extrabold text-purple-400 py-20'>
          &#123; &#124; &#125;
        </p>
      </motion.div>
      <div className='space-y-8 self-end sm:mt-10'>
        <h2 className='text-4xl text-white  font-semibold'>
          Frontend Developer
        </h2>
        <p className="lg:w-[70%] pr-4 text-slate-300  text-2xl lg:before:content-['//']  lg:after:content-['//'] flex">
          Technical writer and sometimes messes around with new tech.
        </p>
      </div>
    </section>
  );
}
export default Hero;
