import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../Assets/rfid-icon.png';
import { SidebarData } from '../../Data/Data';
import { NavLink } from 'react-router-dom';
// import { motion } from 'framer-motion';

function Sidebar() {
  // const [selected, setSelected] = useState(0);

  const navLinkStyles = {
    textDecoration: 'none',
    // margin: '0.15rem',
    color: 'black',
  };

  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>SYSTEM</span>
      </div>
      <div className="menu">
        {SidebarData.map((item, index) => (
          <NavLink
            to={`${item.where}`}
            style={navLinkStyles}
            // className={selected === index ? 'menuItem active' : 'menuItem'}
            key={index}
            className={({ isActive }) =>
              isActive ? 'menuItem active' : 'menuItem'
            }
          >
            <item.icon />

            {item.heading}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
