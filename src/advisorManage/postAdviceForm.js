import React from 'react'
import {useForm} from "react-hook-form"
import { apiPost } from '../services/apiServices';
import { API_URL } from '../services/apiServices';
import { useNavigate } from 'react-router-dom';

export default function PostAdviceForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav= useNavigate();
    const onSubForm = async (_bodyData) => {
      delete _bodyData.disease_id;
      console.log(_bodyData);
      const url = API_URL+"/advisors";
      const data = await apiPost(url,_bodyData)
      console.log(data);
      nav("/advisors");
    }

  return (
    <React.Fragment>
      <h2 className='display-2 text-center p-2 text-success'>Post Advice:</h2>
    <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='p-4'>
    <label>Name</label>
    <input {...register("name",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.name && <div className="text-danger">* Enter valid Name</div>}
    <label>Image url</label>
    <input {...register("img_url",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.img_url && <div className="text-danger">* Enter valid Image url</div>}
    <label>Exprinced year</label>
    <input {...register("exprinced_year",{required:true, minLength:2})} className="form-control" type="number" />
    {errors.exprinced_year && <div className="text-danger">* Enter valid Exprinced year</div>}
    <label>Location</label>
    <input {...register("location",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.location && <div className="text-danger">* Enter valid Location</div>}
    <label>Phone</label>
    <input {...register("phone",{required:true, minLength:2})} className="form-control" type="tel" />
    {errors.phone && <div className="text-danger">* Enter valid Phone</div>}
    <label>Info</label>
    <textarea {...register("info",{required:true, minLength:2})} className="form-control" type="textarea" />
    {errors.info && <div className="text-danger">* Enter valid Info</div>}
    <button className='btn btn-info mt-2'>Post</button>
    </form>
    </React.Fragment>
 
  )
}

