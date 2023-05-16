import React from 'react'
import {useForm} from "react-hook-form"
import { apiPost } from '../services/apiServices';
import { API_URL } from '../services/apiServices';
import { useNavigate } from 'react-router-dom';

export default function PostCouponForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const nav= useNavigate();
    const onSubForm = async (_bodyData) => {
      delete _bodyData.disease_id;
      console.log(_bodyData);
      const url = API_URL+"/coupons";
      const data = await apiPost(url,_bodyData)
      console.log(data);
      nav("/coupons")
    }

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='p-4'>
    <label>Title</label>
    <input {...register("title",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.title && <div className="text-danger">* Enter valid title</div>}
    <label>Image url</label>
    <input {...register("img_url",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.img_url && <div className="text-danger">* Enter valid Image url</div>}
    <label>Info</label>
    <input {...register("info",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.info && <div className="text-danger">* Enter valid info</div>}
    <label>Adress</label>
    <input {...register("adress",{required:true, minLength:2})} className="form-control" type="text" />
    {errors.adress && <div className="text-danger">* Enter valid adress</div>}
    <label>link_url</label>
    <input {...register("link_url",{required:true, minLength:2})} className="form-control" type="tel" />
    {errors.link_url && <div className="text-danger">* Enter valid Phone</div>}

    <button className='btn btn-info mt-2'>Post</button>
    </form>
    </React.Fragment>
 
  )
}

