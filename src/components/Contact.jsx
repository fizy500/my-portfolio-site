import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import HomeLink from "./HomeLink";
import ThankYou from "./ThankYou";
import { SenderContext } from "../App";

const emailText = "otuekongarthur@gmail.com";

export default function Contact(handleStateChange) {
  const sendTextToParent = () => {
    handleStateChange()
  };

  const [copyImage, SetCopyImage] = useState(false);
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          // console.log(result.text);
          navigate("/thanks");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCopy = () => {
    let clipBoard = navigator.clipboard;
    clipBoard.writeText(emailText);
    SetCopyImage(!copyImage);
  };

  return (
    <section className='bg-gray-900  '>
      <div className='flex flex-col items-center max-width h-full'>
        <div className='border border-dotted border-purple-400 rounded-sm w-full  py-8 lg:px-8 my-40'>
          <div className='bg-white rounded-sm shadow-2xl grid grid-cols-1 lg:grid-cols-2 py-6 gap-3'>
            <form
              action=''
              className='flex flex-col space-y-6 bg-slate-50 px-4 py-2'
              id='Contact'
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                required
                type='text'
                name='user_name'
                placeholder='name'
                className='rounded-sm px-2 py-3 border border-gray-400 outline-1 outline-gray-500'
                onClick={(e) => sendTextToParent(e.target.value)}
              />

              <input
                required
                type='email'
                name='user_email'
                placeholder='email'
                className='rounded-sm px-2 py-3 border border-gray-400 outline-1 outline-gray-500'
              />

              <textarea
                required
                name='message'
                id=''
                cols='20'
                rows='10'
                placeholder='message'
                className='resize-none rounded-sm px-2 py-3 border border-gray-400 outline-1 outline-gray-500'
              ></textarea>

              <div>
                <button
                  type='submit'
                  value='send'
                  className='bg-purple-400 px-6 py-2 text-white rounded-sm  shadow-xl'
                >
                  Send
                </button>
              </div>
            </form>
            <div className='lg:border-l-4 border-gray-900  flex flex-col items-center justify-center relative'>
              <div className='flex flex-col items-end justify-center space-y-20'>
                <div className='text-center space-y-2'>
                  <p className='font-bold text-3xl text-gray-600'>@</p>
                  <p className='text text-gray-800'>email</p>
                  <div className='flex mr-4'>
                    <i className='text text-gray-400'>
                      otuekongarthur@gmail.com
                    </i>
                    <div
                      className='bg-gray-200 rounded-sm p-1 h-fit'
                      title={!copyImage ? "copy" : "copied"}
                    >
                      {!copyImage ? (
                        <svg
                          height='10px'
                          width='10px'
                          version='1.1'
                          id='Layer_1'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 442 442'
                          xmlSpace='preserve'
                          className='cursor-pointer fill-purple-400 active:fill-purple-200 transition duration-1000'
                          onClick={() => handleCopy()}
                        >
                          <g>
                            <polygon points='291,0 51,0 51,332 121,332 121,80 291,80 	' />
                            <polygon points='306,125 306,195 376,195 	' />
                            <polygon points='276,225 276,110 151,110 151,442 391,442 391,225 	' />
                          </g>
                        </svg>
                      ) : (
                        <svg
                          width='10px'
                          height='10px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M12 15H9M15 11H9'
                            stroke='#c084fc'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  {/* Twitter */}
                  <a
                    href='https://twitter.com/Fizy_hector'
                    className='border border-dotted  border-purple-400 rounded-sm flex justify-center items-center p-2 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      width='30px'
                      height='30px'
                      className='hover:bg-purple-400 rounded-sm transition duration-1000'
                    >
                      <path d='M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z' />
                    </svg>
                  </a>
                  <a
                    // Linked In
                    href='https://www.linkedin.com/in/otuekong-idongesit-bb1122225/'
                    className='border border-dotted  border-purple-400 rounded-sm flex justify-center items-center p-2 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 30 30'
                      width='30px'
                      height='30px'
                      className='hover:bg-purple-400 rounded-sm transition duration-1000'
                    >
                      <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z' />
                    </svg>
                  </a>
                  <a
                    // Github
                    href='https://github.com/fizy500'
                    className='border border-dotted  border-purple-400 rounded-sm flex justify-center items-center p-2 '
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 50 50'
                      width='30px'
                      height='30px'
                      className='hover:bg-purple-400 rounded-sm transition duration-1000'
                    >
                      <path d='M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z' />
                    </svg>
                  </a>
                </div>
                <div></div>
              </div>
              <HomeLink position={"bottom-[93%] left-[90%]"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
