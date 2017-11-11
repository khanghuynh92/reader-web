import React from 'react';
import PropTypes from 'prop-types';

import './Footer.scss';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: null,
};

const Footer = ({ className }) => (
  <footer className={`footer ${className || ''}`}> Bitcoin <span>♥︎</span> <a href="https://www.facebook.com/profile.php?id=100008787426754">You</a> </footer>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
