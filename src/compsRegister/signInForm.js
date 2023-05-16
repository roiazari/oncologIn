import React from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { API_URL ,apiPost, apiGet } from '../services/apiServices';

export default function SignInForm() {
    localStorage.setItem("token","");
    localStorage.setItem("user_type","");
    const nav= useNavigate();
    const{register, handleSubmit, formState: {errors} } = useForm();
    const onSubForm = async (_bodyData) => {
        console.log(_bodyData);
        const url = API_URL+"/users/login"
        const data = await apiPost(url,_bodyData);
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_type", data.role);
        
        nav("/");
      }
    return (
        <React.Fragment>
            <div className='container mt-4 align-item-center'>
                <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='w-50 navSearch' >
                    <label>Email</label>
                    <input {...register("email", { required: true, minLength: 2 })} className="form-control" type="email" />
                    {errors.email && <div className="text-danger">* Enter valid Email</div>}
                    <label>Password</label>
                    <input {...register("password", { required: true, minLength: 2 })} className="form-control" type="password" />
                    {errors.password && <div className="text-danger">* Enter valid Password</div>}
                    <button className='btn btn-info mt-2 mb-2'>submit</button>
                </form>
            </div>
        </React.Fragment>

    )
}
