

import  { useContext } from 'react';
import { Link } from 'react-router-dom';


import { AuthContext } from '../Pages/Provider/AuthProvider';

const Signup = () => {
    
 

    const { createUser } = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="w-1/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-primary bg-opacity-70 font-mono font-bold">Sign Up</h1>
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">

                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white font-mono font bold" type="submit" value="SignUp" />
                                </div>

                            </form>

                            <p className='text-center'>Already have an account? please <Link className='text-orange-500 font-bold font-serif' to="/login">Login</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;


