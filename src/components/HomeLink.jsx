import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function HomeLink({ position }) {
  return (
    <Link to='/' title='Home'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='30px'
        height='30px'
        className={`${position}  absolute  fill-purple-400 hover:fill-purple-300 transition duration-1000`}
      >
        <path d='M12,2.1L1,12h3v9h7v-6h2v6h7v-9h3L12,4.1z M18,19h-3v-6H9v6H6v-8.8l6-5.4l6,5.4V19z' />
      </svg>
    </Link>
  );
}

// 
