import React from 'react'

export default function TeamHome() {
  return (
    <div class="team container-fluid bg-secondary d-flex align-items-center">
        <div class="container">
            <h2 class="display-3 text-center my-3">LEADERSHIP <strong> TEAM</strong></h2>
            <div class="row text-center mt-4">
                <div class="box col-lg-3 col-sm-6"  data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                   <div className='homeImgContainer'>
                    <img src="../images/adam.png" class="col-6 mb-3 border border-4 border-white" alt="pic"/>
                    </div>
                    <h3>Adam Hadari</h3>
                    <h4>Big boss</h4>
                   
                </div>
                <div class="box col-lg-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                     <div className='homeImgContainer'>
                    <img src="images/pic3.jpg" class="mb-3 border border-4 border-white" alt="pic"/>
                    </div>
                    <h3>Ofer Shelly</h3>
                    <h4>Boss</h4>
                </div>
                <div class="box col-lg-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <div className='homeImgContainer'>
                    <img src="../images/roi.png" class="col-6 mb-3 border border-4 border-white" alt="pic"/>
                    </div>
                    <h3>Roi Azari</h3>
                    <h4>Programer</h4>
                </div>
                <div class="box col-lg-3 col-sm-6" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                     <div className='homeImgContainer'>
                    <img  src="images/pic4.jpg" class="mb-3 border border-4 border-white" alt="pic"/>
                    </div>
                    <h3>Michael Gabay</h3>
                    <h4>U/UX manager</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
