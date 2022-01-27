import React, { useContext } from 'react';
import myContext from '../../Context/Mycontext';
import Admin_nav from '../Admin_nav';
import Login from '../Login';
const Admin_projects = () => {
    const a = useContext(myContext);
    if (a.state === true){
        return (
            <>
                <Admin_nav />
                <div classNamw="Admin_content">
                    <p>
                        No projects here
                    </p>
                </div>
            </>
        )
    }
    else {
        return (
            <Login />
        )
    }
}
export default Admin_projects;
