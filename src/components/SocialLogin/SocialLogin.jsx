import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                const saveUser = { name: user.displayName, email: user.email }
                fetch('https://bristo-boss-restarent-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.error(error.message)
            })
    }
    return (
        <div className='text-center my-8'>
            <div className='divider'>Or</div>
            <button onClick={handleGoogleSignIn} className='btn btn-circle btn-outline'>
                <FaGoogle></FaGoogle>
            </button>

        </div>
    );
};

export default SocialLogin;