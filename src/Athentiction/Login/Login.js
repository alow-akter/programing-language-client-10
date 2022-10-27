import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {

    const navigate = useNavigate()

    const { logIn } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset()
                navigate('/course')
            })
            .catch(error => console.error(error))

    }

    const { googleProviderLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-5">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                        <p className="py-6">Please give some information </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <p>Don't have an account </p>
                                    <Link to='/singUp'>SingUp  <hr /></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6 ">
                                <button onClick={handleGoogleSingIn} className="btn btn-secondary gap-2"><FaGoogle className='w-10 h-4'></FaGoogle>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;