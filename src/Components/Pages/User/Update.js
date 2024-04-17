import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Update() {
    const {register, handleSubmit, setValue} = useForm();
    const navi = useNavigate();

    const {userId} = useParams();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('sr', result.data.sr);
        setValue('name', result.data.name);
        setValue('age', result.data.age);
        setValue('gender', result.data.gender);
        setValue('dob', result.data.dob);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/show')
    }
    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
    <div className='container w-50'>
        <center><u><h2>PERSON DATA</h2></u></center>
        <form onSubmit={handleSubmit(saveData)} className='mt-3'>
                <label htmlFor='s'><b>SR NO</b></label>
                <input type='number' id='s' min="0" max="10" className='form-control' required {...register('sr')}/>
                <br /> <br />

                <label htmlFor='n'><b>PERSON NAME</b></label>
                <input type='text' id='n' minLength="0" maxLength="20" className='form-control' required {...register('name')} />
                <br /> <br />

                <label htmlFor='a'><b>AGE</b></label>
                <input type='number' id='a' min="0" max="60" className='form-control' required {...register('age')} />
                <br /> <br />

                <label htmlFor='g'><b>GENDER</b></label>
                <select className='form-control' {...register('gender')}>
                        <option value="Male">MALE</option>
                        <option value="Female">FEMALE</option>
                 </select>
                <br /> <br />

                <label htmlFor='b'><b>DATE OF BIRTH</b></label>
                <input type='date' id='b' max="2024-04-17" className='form-control' required {...register('dob')}/>
                <br /> <br />

                <input type='submit' value="UPDATE DATA" className='btn btn-outline-success col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
        </form>
    </div>
</>
  )
}

export default Update