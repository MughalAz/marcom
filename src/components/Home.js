import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='heading-1'>GROW YOUR<br /> BUSINESS<br />
              WITH US!</h1>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='btn-1'>GET IN TOUCH</button>
            <div className='social'>
              <div className='social-1'><i class="fa-brands fa-instagram social-icon"></i></div>
              <div className='social-1'><i class="fa-brands fa-facebook-f social-icon"></i></div>
              <div className='social-1'><i class="fa-brands fa-twitter social-icon"></i></div>
              <div className='social-1'><i class="fa-brands fa-whatsapp social-icon"></i></div>
            </div>
          </div>
          <div className='col-md-3'></div>
          <div className='col-md-3'>
            <h3 className='heading-2'>NO.1 DIGITAL<br/>
              MARKETING<br/>
              AGENCY</h3><br/>
          </div>
        </div>
      </div>
    </div>
  )
}
