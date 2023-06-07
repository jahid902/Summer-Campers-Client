import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/signIn";

    const GoogleSignIn = () =>{
        googleLogin()
        .then(result=>{
            const user = result.user
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Google Login Successful.",
                showConfirmButton: false,
                timer: 1500,
              });
            navigate(from,{replace:true})
        })
        .catch(error=> {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Sign In failed',
                text: error.message, 
              })
        })
    }

    return (
        <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        <div className="grid h-14 card rounded-box place-items-center bg-pink-100 hover:bg-pink-300 duration-500">
          <img
            onClick={GoogleSignIn}
            src="/google (1).png"
            className="w-8 h-8  cursor-pointer"
            alt=""
          />
        </div>
      </div>
    );
};

export default SocialLogin;