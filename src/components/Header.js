import React from 'react'

function Header () {
  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp' style={{color: "#723A4F"}}>
              Raj & Kalpana
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp' style={{color: "#723A4F"}}><bold>
              9th June, 2022 – Kurnool
              
           </bold> </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
