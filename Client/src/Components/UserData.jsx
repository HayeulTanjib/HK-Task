import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserData = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/userdata')
        .then((res) => setUsersData(res.data.data))
        
    },[])

    
    
    return (
        <div className='grid grid-cols-3 gap-4 pb-10'>
            {
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
            
            }
        </div>
    );
};

export default UserData;