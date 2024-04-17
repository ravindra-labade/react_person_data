import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit } = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data);
        navi('/show');
    }
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

                    <input type='submit' value="ADD DATA" className='btn btn-outline-success col-6' />
                    <input type='reset' value="RESET" className='btn btn-outline-warning col-6' />
            </form>
        </div>
    </>
  )
}

export default Add