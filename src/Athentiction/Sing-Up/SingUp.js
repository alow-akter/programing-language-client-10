import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SingUp = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const photoURL = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                from.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mt-5">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please SingUp now!</h1>
                        <p className="py-6">Please give some information </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Your password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <p>Already have an account </p>
                                    <Link to='/login'>login  <hr /></Link>
                                    <p>{error}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;