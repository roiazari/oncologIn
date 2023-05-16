import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { apiPost } from '../services/apiServices';
import { API_URL } from '../services/apiServices';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditCouponForm() {
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();
  const { id } = useParams();
  const nav = useNavigate();

  const onSubForm = async (_bodyData) => {
    console.log(getValues());
    let url = API_URL + `/coupons/single/${id}`;
    await apiPost(url, getValues());
    nav("/couponsPage");


  }
  const doApi = async () => {
    let url = API_URL + `/coupons/single/${id}`;
    let { data } = await axios({
      url,
      method: "GET",
      headers: { "x-api-key": localStorage["token"] }
    });
    console.log("data123:", data);
    reset({ ...data })
  }

  useEffect(() => {
    doApi();
    console.log(id);
  }, [])

  return (
    <React.Fragment>

      <h2 className='display-2 text-center p-2 text-success'>Edit Coupon:</h2>
      <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='p-4'>
        <label>Title</label>
        <input {...register("title", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.title && <div className="text-danger">* Enter valid title</div>}
        <label>Image url</label>
        <input {...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.img_url && <div className="text-danger">* Enter valid Image url</div>}
        <label>Info</label>
        <input {...register("info", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.info && <div className="text-danger">* Enter valid info</div>}
        <label>Adress</label>
        <input {...register("adress", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.adress && <div className="text-danger">* Enter valid adress</div>}
        <label>link_url</label>
        <input {...register("link_url", { required: true, minLength: 2 })} className="form-control" type="tel" />
        {errors.link_url && <div className="text-danger">* Enter valid Phone</div>}
        <button type='submit' className='btn btn-info mt-2'>Edit</button>
      </form>
    </React.Fragment>

  )
}

