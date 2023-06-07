
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';


const Login = () => {

const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?. pathname || "/" ;

const {signIn, handleGoogleSignIn} = useContext(AuthContext)

const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
            
            const email = form.email.value;
            const password = form.password.value;
          
            console.log(email,password);
            signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                navigate(from, {replace:true});
            })
            .catch(error => console.log(error))
}

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="w-1/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-accent  text-white font-seriffont bold" type="submit" value="Login" />
                                </div>

                            </form>
                            <p className='text-center'>or</p>
                            <div>
                                <button onClick={()=> handleGoogleSignIn()} className=" w-full btn btn-outline btn-accent text-white font-serif font bold gap-3">
                                    <FcGoogle style={{ fontSize: '2rem' }}/>
                                SignUp With Google
                                </button>
                           
                            </div>
                            <p className='text-center'>New to TOY MAGIC? please <Link  className='text-orange-500 font-bold font-serif' to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;