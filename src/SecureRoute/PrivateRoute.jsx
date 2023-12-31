import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center mt-20'>
            <progress className="progress progress-secondary w-96">Loading !!</progress>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;