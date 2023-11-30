import axios from 'axios';
const axiosSecure = axios.create({
    baseURL: 'https://assignment-no-12-server.vercel.app'//baseurl banay rakjhse bar bar localhost jate na lekha lage
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;