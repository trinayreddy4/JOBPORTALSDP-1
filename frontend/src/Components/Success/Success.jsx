import React from 'react';
import success from '../../assets/success-26-256.png'
import styles from './Success.module.css';
import {NavLink} from 'react-router-dom';
const Success = () => {
  return (
    <div className={styles.container}>
      <div className={styles.RegMenu}>
            <div className={styles.succimg}>
                <img src={success} alt="Success" />
            </div>
            <div className={styles.instruction}>
                <p>Kindly Check Your Mail For Further Instructions</p>
            </div>
            <div>
                <NavLink to="login" className={styles.loginLink} >Back To Login</NavLink>
            </div>
      </div>
    </div>
  )
}

export default Success
