import React from 'react';
import './index.scss';

const Footer: React.FC = () => {
  return (
    <footer className="c-footer">
      <p className="c-footer__copyright">
        &copy; {new Date().getFullYear()} Weather App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
