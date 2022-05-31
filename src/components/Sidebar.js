import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Raj <small>&</small> Kalpana
            </span>
            <h6>9.6.2022</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Couple</a>
            </li>
            {/* <li>
              <a href='#story'>Our Story</a>
            </li> */}
            <li>
              <a href='#organization'>Organization</a>
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#whenwhere'>When & Where</a>
            </li>
            <li>
              <a href='#rsvp'>R.S.V.P</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Raj & Kalpana wedding
            <br />
            9 June 2021, Kurnool
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
