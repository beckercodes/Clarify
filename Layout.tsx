import React from 'react';
import Sidebar from '../layout/Sidebar';

const Layout: React.FC<{
  children: React.ReactNode;
  activePage: string;
}> = ({ children, activePage }) => {
  return (
    <div className="container">
      <Sidebar activePage={activePage} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
