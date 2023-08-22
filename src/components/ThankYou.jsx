import HomeLink from "./HomeLink";
import ThankYouSvg from "./ThankYouSvg";
export default function ThankYou() {
 
  return (
    <section className='bg-gray-950  h-full relative py-10 lg:py-[6rem]'>
      <div className='flex flex-col lg:flex-row justify-between  max-width'>
        <div className='flex justify-center items-center'>
          <ThankYouSvg />
        </div>
        <div className='flex justify-center items-center'>
          <p className='f text-lg lg:text-3xl font-bold text-white p-8 tracking-wide border border-dotted border-purple-400 rounded-sm'>
            I will be in your inbox shortly
          </p>
        </div>
      </div>
      <HomeLink position={"top-[20%] left-[90%]"} />
    </section>
  );
}
