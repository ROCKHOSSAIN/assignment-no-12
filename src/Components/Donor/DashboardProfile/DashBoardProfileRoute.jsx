import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import DonorProfile from '../Profile/DonorProfile';

const DashBoardProfileRoute = () => {
    const [userinfo, setuserinfo] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {

        fetch('https://assignment-no-12-server.vercel.app/allUser')
            .then(res => res.json())
            .then(data => {
                setuserinfo(data)
                // setLoading(false)
            })
    }, [])
    const filteremail = userinfo?.find((userinfo) => userinfo.email === user?.email);
    console.log(filteremail)

    console.log(userinfo)
    return (
        <div>
            <div>
                {filteremail ? (
                    <DonorProfile key={filteremail._id} profiledata={filteremail} />
                ) : (
                    null
                )}
            </div>

        </div>
    );
};

export default DashBoardProfileRoute;