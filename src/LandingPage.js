import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className='container'>

      <div className='imagee'>
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple127/v4/46/14/f1/4614f103-f42a-ef21-0369-adc950a1dfdd/source/512x512bb.jpg" alt='Clone_Image'/>
      </div>

      <div className='textLand'>
        <p>Inst@Clone</p>
      </div>

      <div className='btnWrapper'>
        <Link id='landBtn' to='/postview'>
               Login
        </Link>
      </div>

    </div>
  );
}
