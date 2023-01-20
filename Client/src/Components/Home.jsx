import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {

    const [sectors, setSectors] = useState([]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    useEffect(() => {
        axios.get('http://localhost:5000/sectors')
        .then((res) => setSectors(res.data.data))
    },[])


    return (
        <div className='flex flex-col justify-center items-center gap-2'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs my-3 ml-8" />
<div className=''>
{
    sectors.map((sector) => {
        return (
            <div className="collapse collapse-arrow border w-96">
            <input type="checkbox" /> 
            <div className="collapse-title font-medium">
              {sector.category}
            </div>

            <div className="collapse-content"> 
            {
                sector.subCategory.map((subcat) => {
        return(                
            <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">{subcat}</span> 
              <input type="checkbox"  className="checkbox" />
            </label>
          </div>
  
  )
})
}
          
            </div>
          </div>
        )
      })
}   
</div>
<div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox"  className="checkbox" />
              <span className="label-text mr-60">Agree to terms</span> 
            </label>
          </div>
<div className='flex justify-center items-center py-2'>
<button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-md">Save</button>
</div>
</form>
        </div>
    );
};

export default Home;