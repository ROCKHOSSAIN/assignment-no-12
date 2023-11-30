import axios from 'axios';
const axiosPublic = axios.create({
    baseURL:'https://assignment-no-12-server.vercel.app'
})

const useAxiousPublic = () => {
    return axiosPublic
};

export default useAxiousPublic;