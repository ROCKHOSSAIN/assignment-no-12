import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="">
            <div className="relative">
            <img className="" src="https://i.ibb.co/4sjx6bd/mt-1802-slider-img01.jpg" alt="" />

            </div>
            <div className="absolute top-24 md:top-80  md:left-56 flex md:gap-10">

        <Link to='register'> <button className="bg-[#F3B664] md:p-5  text-xl ">Join As A Doner</button> </Link>
        <Link to='searchDonner'> <button className="bg-[#EC8F5E] md:p-5  text-xl ">Search Donner</button> </Link>
           
            </div>
        </div>
    );
};

export default Banner;