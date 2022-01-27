import React, { useContext } from 'react';
import myContext from '../../Context/Mycontext';
import Admin_nav from '../Admin_nav';
import Login from '../Login';

const Admin_analytics = () => {
    const a = useContext(myContext);
    if (a.state === true) {
        return (
            <>
                <Admin_nav />
                <div className="Admin_content">
                    <p>
                        No data here
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
};

export default Admin_analytics;
