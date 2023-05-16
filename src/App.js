// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import React, { useEffect, useState } from 'react';
import Coupons from './compsCoupons/coupons';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Advisors from './‏‏compsAdvisors/advisors';
import Home from './compsHome/home';
import Register from './compsRegister/register';
import SignIn from './compsRegister/signIn';
import Posts from './compsPosts/posts';
import AdvisorsAdmin from './admin/advisors_admin';
import CouponsAdmin from './admin/coupons_admin';
import PostsAdmin from './admin/‏‏posts_admin';
import UsersAdmin from './admin/users_admin';
import Admin from './admin/admin';
import AdvisorPage from './advisorManage/advisorPage';
import AdvisorDetails from './advisorManage/myDetails';
import { apiGet, API_URL } from './services/apiServices';
import CouponsPage from './couponsManage/couponsPage';
import CouponDetails from './couponsManage/myDetails';
import PostAdvice from './advisorManage/postAdvice';
import PostCoupon from './couponsManage/postCoupon';
import UserPage from './user/userPage';
import EditCoupon from './couponsManage/editCoupon';
import EditAdvice from './advisorManage/editAdvice';
import BuyNow from './compsPurchase/buyNow';






function App() {
  // const nav =useNavigate();
const [userValid, setUserValid] = useState(false);
  
const checkUserToken = async () => {
  const checkToken = await apiGet(API_URL + "/users/checkToken");
  console.log(checkToken);

  setUserValid(checkToken._id?true:false);
  
}
  useEffect(()=>{checkUserToken()},[])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        
        <Route path='/signIn' element={<SignIn />} />
      <  Route path='/advisors' element={<Advisors/>} />
        <Route path='/coupons' element={<Coupons />} />
        <Route path='/register' element={<Register />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/advisorsAdmin' element={<AdvisorsAdmin />} />
        <Route path='/couponsAdmin' element={<CouponsAdmin />} />
        <Route path='/postsAdmin' element={<PostsAdmin />} />
        <Route path='/usersAdmin' element={<UsersAdmin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/advisorPage' element={<AdvisorPage />} />
        <Route path='/postAdvice' element={<PostAdvice />} />
        <Route path='/advisorDetails' element={<AdvisorDetails />} />
        <Route path='/couponsPage' element={<CouponsPage />} />
        <Route path='/postCoupon' element={<PostCoupon />} />
        <Route path='/couponsDetails' element={<CouponDetails />} />
        <Route path='/userPage' element={<UserPage/>} />
        <Route path='/editCoupon/:id' element={<EditCoupon/>} />
        <Route path='/editAdvice/:id' element={<EditAdvice/>} />
        <Route path='/buyNow' element={<BuyNow/>} />
   
    
        


        <Route path='/*' element={<h2 className='display-4'>page not found , 404</h2>} />

      </Routes>

    </BrowserRouter>



  )
}

export default App;
