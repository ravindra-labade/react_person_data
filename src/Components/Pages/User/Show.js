import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Show() {
    const [user, setUser] = useState([]);

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data)
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
        <div className='container w-50 mt-5'>
            <table className='table table-danger table-scripted'>
                    <thead>
                            <tr>
                                <th>SR NO</th>
                                <th>PERSON NAME</th>
                                <th>AGE</th>
                                <th>GENDER</th>
                                <th>DOB</th>
                                <th>ACTION</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        user.map((obj)=>{
                            return(
                                <tr>
                                    <td>{obj.sr}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.age}</td>
                                    <td>{obj.gender}</td>
                                    <td>{obj.dob}</td>
                                    <td>
                                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-outline-warning btn-sm me-3'>UPDATE</button></NavLink>
                                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-outline-danger btn-sm'>DELETE</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
            </table>
        </div>
    </>
  )
}

export default Show