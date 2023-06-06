import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='flex justify-center mt-20'>
            <progress className="progress progress-warning w-96">Loading !!</progress>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;