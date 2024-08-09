import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Schedule", href: "/" },
    { name: "Messages", href: "/" },
    { name: "Trainers", href: "/" },
    { name: "Partnership", href: "/" },
  ];

  const handleLogo = () => {
    navigate("/");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/client-pre-login">Client Signup/Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/coach-pre-login">Coach Signup/Login</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/src/assets/logo.svg" alt="logo" onClick={handleLogo} />
      </div>
      <ul className={styles.navLinks}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a to={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.authButtons}>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button className={styles.signupLogin}>Signup / Login</Button>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
