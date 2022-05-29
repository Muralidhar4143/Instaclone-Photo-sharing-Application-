import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {FaCamera} from "react-icons/fa";


export default function Header() {
  return (
    <div className='header'>
       <div className='circle'>
        <img src='https://irelandtravelguides.com/wp-content/uploads/2020/06/799px-Triquetra-circle-interlaced-black.svg_.png' alt='' />
    </div>

      <div className='txtHeader'>
        <Link className='txtHeader' to='/'>
          Inst@clonE
        </Link>
      </div>

      <div className='camera'>
      <Link to='/Form'><FaCamera icon="fa-solid fa-camera-retro fa-2x" className='icon-class'/></Link>
      </div>
    </div>
  );
}
