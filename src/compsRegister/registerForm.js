import React from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../services/apiServices';
import { API_URL } from '../services/apiServices';

export default function RegisterForm() {
  const { register,getValues, handleSubmit, formState: { errors } } = useForm();
  const nav= useNavigate();
  const onSubForm = async (_bodyData) => {
    delete _bodyData.disease_id;
    console.log(_bodyData);
    const url = API_URL+"/users";
    const data = await apiPost(url,_bodyData);
    localStorage.setItem("user_type",getValues("role"));
    console.log(data);
    nav("/signIn");
  }


  return (
    <React.Fragment>
    <div className='container mt-4 mb-4' >
      <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='w-50 navSearch' >
        <label>Name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.name && <div className="text-danger">* Enter valid Name</div>}
        <label>email</label>
        <input {...register("email", { required: true, minLength: 2 })} className="form-control" type="email" />
        {errors.email && <div className="text-danger">* Enter valid Email</div>}
        <label>phone</label>
        <input {...register("phone", { required: true, minLength: 2 })} className="form-control" type="tel" />
        {errors.phone && <div className="text-danger">* Enter valid Phone</div>}
        <label>password</label>
        <input {...register("password", { required: true, minLength: 2 })} className="form-control" type="password" />
        {errors.password && <div className="text-danger">* Enter valid Password</div>}
        <label>ID</label>
        <input {...register("user_id", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.user_id && <div className="text-danger">* Enter valid ID</div>}
        <label>disease</label>
        <select {...register("disease_id")} className="form-select" type="select" >
          <option value="cancar 1" >cancar 1 from Array_Disease collection</option>
          <option value="cancar 2" >cancer 2 from Array_Disease collection</option>
          <option value="cancar 3" >cancer 3 from Array_Disease collection</option>
          <option value="cancar 4" >cancer 4 from Array_Disease collection</option>
          <option value="cancar 5" >cancer 5 from Array_Disease collection</option>
        </select>
        <label>Role</label>
        <select {...register("role")} className="form-select" type="select" >
          <option value="user" >User</option>
          <option value="advisor" >Advisor</option>
          <option value="business" >Business</option>
        </select>
        <button className='mt-2 btn btn-info'>submit</button>
      </form>
    </div>
    </React.Fragment>
  )
}
