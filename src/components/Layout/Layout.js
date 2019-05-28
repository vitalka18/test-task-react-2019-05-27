import React from 'react';

import './Layout.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="l-main">
      <div className="l-main__header">
        <Header />
      </div>

      <main className="l-main__box">
        { children }
      </main>


      <div className="l-main__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
