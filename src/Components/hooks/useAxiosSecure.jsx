import axios from 'axios';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'//baseurl banay rakjhse bar bar localhost jate na lekha lage
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;