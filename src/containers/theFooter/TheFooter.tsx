import { useEffect, useState } from 'react';
import './theFooter.scss';
import { Link } from 'react-router-dom';
import edit from '../../statics/edit.png';
import inbox from '../../statics/inbox.png';
import home from '../../statics/home.png';

const TheFooter = () => {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <Link className="footer-btn ml-auto" to="">
            <img src={edit} alt="edit" />
          </Link>
          <Link to="/" className="footer-home-btn">
            <img src={home} alt="home" />
          </Link>
          <Link className="footer-btn mr-auto" to="">
            <img src={inbox} alt="inbox" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
