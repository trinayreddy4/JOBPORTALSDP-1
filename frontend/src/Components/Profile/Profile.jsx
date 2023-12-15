import React, { useState } from 'react';
import styles from './Profile.module.css';
import dummyPP from '../../assets/dummyPP.png';
const Profile = () => {
  const [firstName,setFirstName]=useState(`john Doe`);
  const [lastName,setLastName]=useState(`Malireddy`);
  return (
    <div className={`${styles.container} `}>
        <div className={styles.cont2}>
            <div className={styles.profCont}>
                    <div className={styles.profilePic}>
                        <div>
                            <img src={dummyPP} alt="profile Pic" width="175px" height="175px" />
                        </div>
                        <div className={styles.userName}>
                            <h2>{firstName}</h2>                    
                        </div> 
                    </div>
                    <div className={styles.pro}>
                        {/* <div>
                            <button type="button" class="btn btn-dark">Edit Profile</button>
                        </div> */}
                        <div className={styles.personalInfo}>
                            <div className={`${styles.names}`}>
                              <div className={`${styles.firstName}`}>
                                    <h5>{firstName}</h5>
                              </div>
                              <div className={`${styles.lastName}`}>
                                    <h5>{lastName}</h5>
                              </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profile
