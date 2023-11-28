// import React from 'react';
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from "./useAuth";
// import { useQuery } from "@tanstack/react-query";

// const allUser = () => {
//     const axiosSecure = useAxiosSecure();
//     const {user} = useAuth()
//     const {refetch, data: users = []} = useQuery({
//         queryKey:['users',user?.email],
//         queryFn:async()=>{
//             const res = await axiosSecure.get(`/donorRequest?email=${user.email}`)
//             return res.data
//         }
//     })
//     return[users,refetch]
// };

// export default allUser;