function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 border-dotted border-t border-purple-400 h-20 py-5 text-center'>
      <div>
        <p className='text-white font-semibold'>Made by me </p>

        <span className="text-white font-extralight">{currentYear}</span>
      </div>
    </footer>
  );
}

export default Footer;
