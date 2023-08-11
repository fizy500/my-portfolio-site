import { Link } from "react-router-dom";
import CssLogo from "../assets/cssLogo.svg";
import HtmlLogo from "../assets/htmlLogo.svg";
import JavascriptLogo from "../assets/javascriptLogo.svg";
import ReactLogo from "../assets/reactLogo.svg";

export default function Skills() {
  return (
    <section className='flex justify-center items-center'>
      <div className='  bg-gray-700 h h-[40rem] w-[40rem]  rounded-[50%]  relative'>
        <div className='absolute top-1/2 right-1/2'>
          <img src={HtmlLogo} alt='' />
        </div>
        <div className='absolute top-40 right-1/3 '>
          <img src={CssLogo} alt='' />
        </div>
        <div className='absolute bottom-[20rem] '>
          <img src={JavascriptLogo} alt='' />
        </div>
        <div className='absolute'>
          <img src={ReactLogo} alt='' width='20' />
        </div>
      </div>
    </section>
  );
}
