function Contact() {
  return (
    <section className='bg-gray-900 flex flex-col items-center py-8'>
      <p className='text-white text-3xl font-mono'>Ways to contact me</p>
      <div className='lg:flex flex-co flex-auto justify-between lg:space-x-5 space-y-4 lg:space-y-0 py-8'>
        <div>
          <button className='text-yellow-900 border-2 border-yellow-900 rounded-sm px-2 py-2 w-  w-52 rotate-2 skew-x-1'>
            Twitter
          </button>
        </div>
        <div>
          <button className='text-yellow-900 border-2 border-yellow-900 rounded-sm px-2 py-2 w-52 rotate-2 skew-x-1'>
            Email
          </button>
        </div>
        <div>
          <button className='text-yellow-900 border-2 border-yellow-900 rounded-sm px-2 py-2 w-52 rotate-2 skew-x-1'>
            LinkedIn
          </button>
        </div>
      </div>
      <div className='space-y-4'>
        <div>
          <button className='text-yellow-900 border-2 border-yellow-900 rounded-sm px-2 py-2 w-52 rotate-2 skew-x-1'>
            Whatsapp
          </button>
        </div>
        <div>
          <button className='text-yellow-900 border-2 border-yellow-900 rounded-sm px-2 py-2 w-52 rotate-2 skew-x-1'>
            Download Cv
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
