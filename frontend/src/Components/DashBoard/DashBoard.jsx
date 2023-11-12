import React from 'react';
import styles from './DashBoard.module.css';

const DashBoard = () => {
  return (
    <div>
      <div className={styles.cont}>
            <div className={styles.dash}>
                <div className={styles.box}>
                    <h5>ACCEPTED OFFERS</h5>
                    <div className={styles.count}>
                        <p>0</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h5>REJECTED OFFERS</h5>
                    <div className={styles.count}>
                        <p>0</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <h5>PENDING OFFERS</h5>
                    <div className={styles.count}>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className={styles.inter}>
                <div className={styles.inte}>
                    <h5 className={styles.he}>UPCOMING INTERVIEWS</h5>
                    <div>
                        
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default DashBoard
