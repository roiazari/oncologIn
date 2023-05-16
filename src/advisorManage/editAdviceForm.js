import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { apiPost } from '../services/apiServices';
import { API_URL } from '../services/apiServices';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditAdviceForm() {
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm();
  const { id } = useParams();
  const nav = useNavigate();

  const onSubForm = async (_bodyData) => {
    console.log(getValues());
    let url = API_URL + `/advisors/single/${id}`;
    await apiPost(url, getValues());
    nav("/advisorPage");
  }

  const doApi = async () => {
    let url = API_URL + `/advisors/single/${id}`;
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
      <h2 className='display-2 text-center p-2 text-success'>Edit Advice:</h2>
      <form onSubmit={handleSubmit(onSubForm)} id="id_form" className='p-4'>
        <label>Name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.name && <div className="text-danger">* Enter valid Name</div>}
        <label>Image url</label>
        <input {...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.img_url && <div className="text-danger">* Enter valid Image url</div>}
        <label>Exprinced year</label>
        <input {...register("exprinced_year", { required: true, minLength: 2 })} className="form-control" type="number" />
        {errors.exprinced_year && <div className="text-danger">* Enter valid Exprinced year</div>}
        <label>Location</label>
        <input {...register("location", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.location && <div className="text-danger">* Enter valid Location</div>}
        <label>Phone</label>
        <input {...register("phone", { required: true, minLength: 2 })} className="form-control" type="tel" />
        {errors.phone && <div className="text-danger">* Enter valid Phone</div>}
        <label>Info</label>
        <textarea {...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea" />
        {errors.info && <div className="text-danger">* Enter valid Info</div>}
        <button>Edit</button>
      </form>
    </React.Fragment>

  )
}

