import React from 'react'
import Bride from '../assets/images/bride1.jpeg'
import Groom from '../assets/images/groom1.jpeg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>{/*edited css */}
                  <h6>
                    Kalpana <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  {/* <p>
                    Olivia fringilla dui at elit finibus viverra nec a lacus
                    seda themo the miss druane semper sollicitudin non the
                    fermen.
                  </p> */}
                  {/* <div className='social'>
                    <div className='full-width'>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-facebook'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-twitter'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-instagram'></i>{' '}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                 <div className='full-width'> {/*edited css */}
                  <h6>
                    Raj <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  {/* <p>
                    Enrico fringilla dui at elit finibus viverra nec a lacus
                    seda themo the miss druane semper sollicitudin non the
                    fermen.
                  </p> */}
                  {/* <div className='social'>
                    <div className='full-width'>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-facebook'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-twitter'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-instagram'></i>{' '}
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Are getting married!</h3>
            <h4 className='oliven-couple-subtitle'>
              June 9, 2022 — Kurnool, Andhra Pradesh
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
