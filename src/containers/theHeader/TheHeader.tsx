import { useEffect, useState } from 'react';
import './theHeader.scss';
import logo from '../../statics/image 2.png';
import user from '../../statics/avatar.png';

const TheHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container container">
        <div className="user-img ml-auto">
          <img src={user} alt="user" />
        </div>
        <div className="logo-img ml-auto">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default TheHeader;
