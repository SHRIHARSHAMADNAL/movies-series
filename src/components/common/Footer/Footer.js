import React from 'react';
import './Footer.scss';
import facebook from '../../../assets/social/facebook-white.svg';
import twitter from '../../../assets/social/twitter-white.svg';
import instagram from '../../../assets/social/instagram-white.svg';
import appStore from '../../../assets/store/app-store.svg';
import playStore from '../../../assets/store/play-store.svg';
import windowsStore from '../../../assets/store/windows-store.svg';

export const Footer = () => {
  return (
    <div className='footerMainContainer'>
    <footer className="footer">
      <div className="footer-top">
    <p>Home | Terms & Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
    <p>Copyright @ 2023 Demo Streaming . All rights reserved</p>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>
        <div className="store-icons">
          <img src={appStore} alt="App Store" />
          <img src={playStore} alt="Play Store" />
          <img src={windowsStore} alt="Windows Store" />
        </div>
      </div>
    </footer>
    </div>
  );
};

