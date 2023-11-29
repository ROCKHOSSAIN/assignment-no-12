import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>

           <img className=' mx-auto md:w-1/4' src="https://i.ibb.co/F6GsNgW/404.png" alt="" /> 
           <h1 className='font-bold font-poppins text-2xl md:text-6xl mt-10'>You found me!</h1>
           <h3 className='text-base md:text-3xl mt-2 md:mt-5'>But I'm  probably not what you are looking for</h3>
          <Link to='/'>
          <button className='font-bold text-base md:text-2xl md:mt-5 hover:bg-green-400 p-5'>Go Back To Home</button>
          </Link> 
        </div>
    );
};

export default ErrorPage;