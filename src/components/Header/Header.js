import React from 'react';

import './Header.scss';
import Logo from 'components/Logo/Logo';

/**
 * Base application's header markup.
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>

      <h1 className="header__title">Front-End Developer</h1>

      <div className="header__content">
        <p>
          Adyax's core values take top priority: we care for out client, and we care for our people.
          Staff and clients work in partnership with consistent, transparent communication.
        </p>
      </div>
    </header>
  );
};

export default Header;
