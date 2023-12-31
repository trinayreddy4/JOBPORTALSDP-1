import React, { useState } from 'react';
import styles from './Profile.module.css';
import dummyPP from '../../assets/dummyPP.png';
import uploadPng from '../../assets/upload.svg';
import axios from 'axios';
const Profile = () => {
  const [firstName,setFirstName]=useState(`john Doe`);
  const [lastName,setLastName]=useState(`Malireddy`);
  const [gender,setGender]=useState('Male');
  const [contact,setContact]=useState('+917207724648');
  const [address,setAddress]=useState('Beech Creek, PA, Pennsylvania');
  const [permanentAddress,setPermanentAddress]=useState('Arlington Heights, IL, Illinois');
  const [email,setEmail]=useState('2200030815@kluniversity.in');
  const [id,setId]=useState(2200030815);
  const [birthday,setBirthday]=useState(12-11-2004);
  const [experience,setExperience]=useState([]);
  const [resume,setResume]=useState();
  const handleClick=async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    // console.log(resume);
    formData.append('id',id);
    formData.append('file',resume);
    await axios.post('http://localhost:5000/upload/resume',formData).then((e)=>alert(e)).catch((err)=>alert(err));
  }
  return (
    <div className={`${styles.container} `}>
        <div className={styles.cont2}>
            <div className={styles.profCont}>
                    <div className={styles.profilePic}>
                        <div>
                            <img src={dummyPP} alt="profile Pic" width="175px" height="175px" />
                        </div>
                        <div className={styles.userName}>
                            <h2 className='text-4xl'>{firstName}</h2>                    
                        </div> 
                    </div>
                    <div className={styles.pro}>
                    {/* <!-- Profile tab --> */}
                {/* <!-- About Section --> */}
                <div className={`${styles.profMaintainer}`}>
                <div class="bg-white p-3 shadow-sm rounded-md">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide prose prose-xl">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 prose prose-lg font-bold dark:prose-invert">First Name</div>
                                <div class="px-4 py-2 prose prose-md dark:prose-invert">{firstName}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose-invert">Last Name</div>
                                <div class="px-4 py-2 prose prose-md dark:prose-invert">{lastName}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose-invert">Gender</div>
                                <div class="px-4 py-2 prose prose-md">{gender}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose:invert">Contact No.</div>
                                <div class="px-4 py-2 prose prose-md dark:prose-invert">{contact}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose-invert ">Current Address</div>
                                <div class="px-4 py-2 prose prose-md">{address}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose-invert">Permanant Address</div>
                                <div class="px-4 py-2 prose prose-md dark:prose-invert">{permanentAddress}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold prose prose-lg dark:prose-invert">Email.</div>
                                <div class="px--3 py-2">
                                    <a class="text-blue-800 prose prose-md dark:prose-invert" href={`mailto:${email}`}>{email}</a>
                                </div>
                            </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold prose prose-lg ">Birthday</div>
                                    <div class="px-4 py-2 prose prose-md dark:prose-invert">{birthday}</div>
                                </div>
                            </div>
                            <div>
                                <div class='grid grid-cols-1'>
                                    <div class='px-4 py-2 font-semibold prose prose-lg dark:prose-invert'>Id Number</div>
                                    <div class='px-4 py-2 prose prose-md dark:prose-invert'>{id}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 shadow-sm rounded-md">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide prose prose-xl dark:prose-invert">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                {
                                    experience.length!==0?(
                                    experience.map(
                                        (r)=>
                                        <li>
                                            <div class="text-teal-600">{r.description}</div>
                                            <div class="text-gray-500 text-xs">{r.timeline}</div>
                                        </li>
                                    )):(
                                        <li>
                                            <div class='text-teal-600'>No Experience</div>
                                        </li>
                                    )
                                }
                                
                                {/* <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide prose prose-xl dark:prose-invert">Education</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Bachelors Degreen in </div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- End of Experience and education grid --> */}
                </div>
                <div>
                    <div>
                        <button class="bg-white hover:bg-gray-500 text-gray-800 font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Edit Profile
                        </button>
                    </div>
                    <div>
                        <br />
                        <input type="file" accept='application/pdf' onChange={(e)=>setResume(e.target.files[0])} />
                        <br />
                    </div>
                    <div className='my-2'>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleClick}>
                                <img src={uploadPng} alt="Upload" width='25px' height='25px' />
                                <span>Upload Resume</span>
                        </button>
                    </div>
                </div>
                {/* <!-- End of profile tab --> */}
            </div>
            </div>
            </div>
        </div>
  )
}

export default Profile
