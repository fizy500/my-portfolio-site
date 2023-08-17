import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Form() {
  
  console.log(senderName);

  return (
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
        onClick={(e) => setSenderName(e.target.value)}
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
  );
}
