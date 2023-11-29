import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { CgSearch } from "react-icons/cg";
// import useAxiousPublic from '../../hooks/useAxiosPublic';
const SearchDonor = () => {
    // const{upazila,bloodGroup,district}=searchdonor
    const [searchdonor,setSearchDonor] = useState([])
    const [Allfilterdata, setAllFilterData] = useState([]); 
    // console.log(upazila)
    const { register, handleSubmit, reset } = useForm()
    const [districts, setdistrict] = useState([])
    const [upazilas, setupazila] = useState([])

    useEffect(() => {
        fetch('../../../district.json')
            .then(res => res.json())
            .then(data => setdistrict(data))
    }, [])
    useEffect(() => {
        fetch('../../../upazila.json')
            .then(res => res.json())
            .then(data => setupazila(data))
    }, [])
       useEffect(() => {
        fetch('http://localhost:5000/alluser')
            .then(res => res.json())
            .then(data => setSearchDonor(data))
    }, [])
    console.log(searchdonor)
    // const axiosPublic = useAxiousPublic()
    const onSubmit = async (data) =>{
        console.log(data)
       
        const filterdata = searchdonor?.filter((filterdata) => {
            console.log('filterdata:', filterdata);
            console.log('data:', data);
            return (
              filterdata.upazila === data.upazila &&
              filterdata.bloodGroup === data.bloodGroup &&
              filterdata.district === data.district
            );
          });
          console.log(filterdata)
          setAllFilterData(filterdata);
          
        }
        console.log(Allfilterdata)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6'>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Blood Group*</span>

                        </label>


                        <select {...register('bloodGroup', { required: true })}
                            className="select select-bordered w-full ">
                            <option disabled value="default">Select your blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>


                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">upazila*</span>

                        </label>


                        <select  {...register('upazila', { required: true })}
                            className="select select-bordered w-full ">
                            <option disabled value="default">Select your upazila</option>
                            {
                                upazilas.map(upazilas => <option key={upazilas.id}>
                                    {upazilas.name}
                                </option>)
                            }


                        </select>

                    </div>
                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">District*</span>

                            </label>


                            <select  {...register('district', { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value="default">Select your District</option>
                                {
                                    districts.map(districts => <option key={districts.id}>
                                        {districts.name}
                                    </option>)
                                }


                            </select>


                        </div>

                </div>
                <button className='btn bg-red-700 hover:bg-red-700 mt-2 text-white mx-auto flex'>
                    search <CgSearch></CgSearch>
                </button>
            </form>
        {/* showing data by table format  */}
        <div className="overflow-x-auto mx-auto container">
          <table className="table table-zebra w-full">
            {/* head */}
           {Allfilterdata.length>0 && <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>BloodGroup</th>
                <th>Upazila </th>
                <th>District</th>
               
              </tr>
            </thead>}
            <tbody>
            {
                Allfilterdata?.map((data, index)=> <tr key={data._id}>
                    <th>{index+1}</th>
                    <td>{data.name}</td>
                    <td>{data.bloodGroup}</td>
                    <td>{data.upazila}</td>
                    <td>{data.district}</td>
                   
                   
                    
                   
                    
                  </tr>)
            }   
             </tbody>
          </table>
        </div>                 





        </div>
    );
};

export default SearchDonor;