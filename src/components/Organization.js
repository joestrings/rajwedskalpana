import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Organization</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/slider.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Ceremony</h6>
            <p>
            With our sincere invitation, we cordially invite you to 
            come to our wedding ceremony and bless us.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Lunch Time</h6>
            <p>
            We cordially invite you to the wedding dinner to be held at the same residence post ceremony.
              <br></br>
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Photo Session</h6>
            <p>
              We would like to make this day as a memorable one for the rest of our lives with you.
              so lets snap a pic together.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Cake Cutting</h6>
            <p>
              Bless us while we enter into a new life together as a family by blowing a candle.
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
