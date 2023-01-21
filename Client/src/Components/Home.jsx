import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import UserData from './UserData';

const Home = () => {

    const [sectors, setSectors] = useState([]);
    const [toogle, setToogle] = useState(false);
    const [loading, setLoading] = useState(false);
    const API = "https://hktaskk.onrender.com"

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async(data) => {
      console.log(data);
     await axios.post(`${API}/userdata`, data)
      .then((res) => {
        
        (res.status === 201) ? 
        swal({
          position: 'top-end',
          icon: 'success',
          title: 'Data has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        : 
        swal({
          position: 'top-end',
          icon: 'error',
          title: 'Data not saved',
          showConfirmButton: false,
          timer: 1500
        })
      })

      reset();
    }
    
    useEffect(() => {
      setLoading(true);
      const sectorsData = async() => {
        const { data } = await axios.get(`${API}/sectors`)
        setSectors(data.data)
        setLoading(false);
      }
      sectorsData();
    },[])

 
    return (
        <div className='flex flex-col justify-center items-center gap-2'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='py-4'>
            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered w-full max-w-xs ml-8" />
            <small className="text-red-500 ml-8">{errors.name?.type === 'required' && "Name is required"}</small>
</div>
<div className='flex flex-col justify-center items-center'>

{ loading ? <progress className="progress w-56 py-1"></progress> :
(
    sectors.map((sector) => {
        return (
            <div className="collapse collapse-arrow border w-96">
            <input type="checkbox"/> 
            <div className="collapse-title font-medium">{sector.category}</div>
            <div className="collapse-content"> 
            {
                sector.subCategory.map((subcat) => {
        return(                
            <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{subcat}</span> 
              <input type="checkbox" value={subcat} {...register("sectors")}  className="checkbox" />
            </label>
          </div>
  
  )
})
} 
        </div>
      </div>
      )
    })
    )
}   


</div>
<div className="form-control">
            <label className="label">
              <input type="checkbox" {...register("isAgree")} onChange = {() => setToogle(!toogle)} className="checkbox" />
              <span className="label-text mr-60">Agree to terms</span> 
            </label>
          </div>
<div className='flex justify-center items-center py-2'>
  {toogle ? <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md">Save</button> : <button disabled className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md">Save</button>}

</div>
</form>
<div className="divider px-24"></div> 
<UserData API={API}/>
        </div>
    );
};

export default Home;