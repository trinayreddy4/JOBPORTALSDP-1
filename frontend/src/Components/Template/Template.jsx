import React from 'react';
import styles from './Template.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Template = () => {
  return (
    <>
        <div className={styles.cont}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}

export default Template
