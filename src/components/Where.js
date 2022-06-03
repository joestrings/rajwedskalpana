import React from 'react'
import where1 from '../assets/images/where-1.jpg'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Engagement & PARTY</h5>
              <p>
                <i className='ti-location-pin'></i> C.S.I Christ Church(S.P.G),Near Children's park,
                Kurnool
              </p>
              <p>
                <i className='ti-time'></i> <span>June 8 ,2022(6:30pm – 10:30pm)</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony </h5>
              <p>
                <i className='ti-location-pin'></i> C.S.I Christ Church(S.P.G),Near Children's park,
                Kurnool
              </p>
              <p>
                <i className='ti-time'></i> <span>June 9,2022(11:30am)</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>WEDDING PARTY</h5>
              <p>
                <i className='ti-direction-alt'></i> C.S.I Christ Church(S.P.G),Near Children's park,
                Kurnool
              </p>
              <p>
                <i className='ti-direction'></i> June 9,2022(followed by Ceremony)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where
