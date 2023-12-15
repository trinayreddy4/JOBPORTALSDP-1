import React from 'react';
import styles from './Navbar.module.css';
import img from '../../assets/iconwhite.png';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={styles.navb}>
      <div>
        <img src={img} alt="logo" />
      </div>
      <div>
        <ul className={styles.menu}>
          <li>HOME</li>
          <li>NEW POSTINGS</li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MY APPLICATIONS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Accepted</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Rejected</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Pending</a></li>
          </ul>
        </li>
          <NavLink to='/profile'>MY PROFILE</NavLink>
          <NavLink to='/login'>LOGIN</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
