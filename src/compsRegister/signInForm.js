import React, { useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { API_URL, apiPost, apiGet } from '../services/apiServices';

export default function SignInForm() {

    localStorage.setItem("token", "");
    localStorage.setItem("user_type", "");
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubForm = async (_bodyData) => {
        try{
        console.log(_bodyData);
        const url = API_URL + "/users/login"
        const data = await apiPost(url, _bodyData);
        console.log("message1:"+data);
      

        if(data.msg==="User or password not valid"){
    
            console.log("message:"+data.msg);
            window.alert("User or password not valid");
            return;
        } 
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_type", data.role);

        nav("/");
    }
    catch (err){
        console.log(err); 
    }
    }
    const responseGoogle = (response) => {
        console.log(response);
      }
      const googleButton =useRef();
      useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id:"820906128444-e4r9v8i7d1s0r536noa7mtov742tuolg.apps.googleusercontent.com",
            callback:responseGoogle
          })
          window.google.accounts.id.renderButton(
            googleButton.current , {
                theme: 'outline',
                size: 'large',
                text: 'signin_with',
                width: '250',
                type: 'icon',
                locale: '',
                logo_alignment: 'center',
                shape: 'circle',
            }
          )
            
          
      },[]);


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
                <div className='google-signin-button' ref={googleButton}>
                        
                </div>

            </div>
        </React.Fragment>

    )
}
