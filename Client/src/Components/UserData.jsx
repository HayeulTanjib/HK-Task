import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserData = ({API}) => {

    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const userData = async() => {
          const {data} = await axios.get(`${API}/userdata`);
          setUsersData(data.data);
          setLoading(false);
        }
        userData();
    },[])

    
    
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 pb-10'>
            {
            loading ? <div><progress className="progress w-56 py-1"></progress></div> :
            (
            usersData.map((user) => {
                const {name, sectors} = user
                return(
                    <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-semibold text-center">{name}</h2>
                    {
                    sectors.map((sector, index) => {
                        return(
                            <ul>
                                <li>{index+1}. {sector}</li>
                            </ul>
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
    );
};

export default UserData;
