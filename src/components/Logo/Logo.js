import React from 'react';
import PropTypes from 'prop-types';

import './Logo.scss';

/**
 * Default logo
 *
 * @param title
 */
const Logo = ({ title }) => {
  return (
    <a className="logo" href="/">
      <img className="logo__image" alt="Adyax logo image" src="" />

      <span className="logo__text">
        { title }
      </span>
    </a>
  );
};

Logo.defaultProps = {
  title: 'A BETTER EXPERIENCE'
};

Logo.propTypes = {
  title: PropTypes.string
};

export default Logo;
