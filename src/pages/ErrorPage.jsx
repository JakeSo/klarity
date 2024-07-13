import { Link } from 'react-router-dom';
import logo from '../assets/1.svg';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <img src={logo} alt="Klarity logo" className='w-24 mb-8' />
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p className='text-lg mb-8'>Oops! The page you are looking for does not exist.</p>
      <Link to="/Klarity" className='text-gold text-lg underline'>
        Go back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
