import React from 'react';
import styles from './Profile.module.css';
import dummyPP from '../../assets/dummyPP.png';
const Profile = () => {
  return (
    <div className={`${styles.container} `}>
        <div className={styles.cont2}>
            <div className={styles.profCont}>
                    <div className={styles.profilePic}>
                        <img src={dummyPP} alt="profile Pic" width="175px" height="175px" />
                    </div>
                    <div className={styles.pro}>
                        <div className={styles.cetifications}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vel!
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profile
