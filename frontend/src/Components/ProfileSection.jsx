import React from 'react'
import "./ProfileSection.css"
import logo from "./OFLIX.png";
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth,signOut } from '../firebase';

const ProfileSection = () => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(logout());
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        console.log("logout");
    }

    return (
        <>
            <Navbar />
            <div className='rootProfile'>

                <div className='profileSection'>
                    <h1 className='pheading'>Edit Profile</h1>
                    <div className='profileCont'>
                        <div className='leftSec'>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                                alt=""
                            />
                        </div>
                        <div className='rightSec'>
                            <p className='userEmail'>{user.email}</p>
                            <h2 className='currentPlan'>Plans (Current Plan: Standard)</h2>
                            <hr />
                            <p className='renewalDate'>Renewal date: 09/06/2023</p>
                            <div className='allPlans'>
                                <div className='plan'>
                                    <div>
                                        <p>Oflix Standard</p>
                                        <p>1080p</p>
                                    </div>
                                    <button className='subscribebtn'>Subscribed</button>
                                </div>
                                {/* <div className='plan'>
                                    <div>
                                        <p>Oflix Basic</p>
                                        <p>480p</p>
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                                <div className='plan'>
                                    <div>
                                        <p>Oflix Premium</p>
                                        <p>4K_HDR</p>
                                    </div>
                                    <button>Current Package</button>
                                </div> */}
                            </div>
                            <button className='signoutbtn' onClick={handleLogout}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSection