import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Delete() {
    const [user, setUser] = useState([]);

    const navi = useNavigate();

    const {userId} = useParams()

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    function deleteUser(){
        axios.delete(`http://localhost:5000/users/${userId}`);
        navi('/show');
    }
    useEffect(()=>{
        fetchData();
    }, [])

    
  return (
        <>
            <center>
                     <h2><u>DELETE CONFIRMATION</u></h2>
                    <div>
                        <h2><u>DO YOU WANTS TO DELETE {user.sr} {user.name} {user.age} {user.gender} {user.dob}</u></h2>

                        <button onClick={()=>deleteUser()} className='btn btn-outline-danger'>YES</button>
                        <NavLink to="/show"><button className='btn btn-outline-warning'>NO</button></NavLink>
                    </div>
            </center>
        </>
  )
}

export default Delete