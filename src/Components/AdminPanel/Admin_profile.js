import React, { useContext } from 'react';
import myContext from '../../Context/Mycontext';
import Admin_nav from '../Admin_nav';
import "../../css/Enquiry.css";
import Login from '../Login';

const Admin_profile = () => {
    const a=useContext(myContext);
    const Changefullname=(e)=>{
        console.log(e.target.value)
    }

    if (a.state === true){
        return(
        <>
        <Admin_nav/>
        <div className="container">
                <div className="title">Enquiry</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" onChange={Changefullname} placeholder="Enter your name" defaultValue={a.FullName} />
                            </div>
                            <div className="input-box">
                                <span className="details">Mobile</span>
                                <input type="text" placeholder="Enter your number" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Course</span>
                                <input type="text" placeholder="Course" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Date</span>
                                <input type="Date" required />
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Address" required />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" />
                            <input type="radio" name="gender" id="dot-2" />
                            <input type="radio" name="gender" id="dot-3" />
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label for="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label for="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label for="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>

        </>
        );
    }
    else {
        return (
            <Login />
        )
    }
};

export default Admin_profile;
