import React from 'react'

function RSVP () {
  function onClick()
  {
   window.open("https://docs.google.com/forms/d/e/1FAIpQLSeobTTh3f1yjIo8EfiRq0-LeC6dsrdV853uSO31gedP-docNQ/viewform?vc=0&c=0&w=1&flr=0","_self")
  };

  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Your Best Wishes</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            <form className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Email' />{' '}
                </div>
              </div>
              {/* <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Guests'
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div> */}
              {/* <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='WISH HERE' onClick={onClick}/>{' '}
                </div>
              </div> */}
            </form>
            <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='WISH HERE' onClick={onClick}/>{' '}
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP
