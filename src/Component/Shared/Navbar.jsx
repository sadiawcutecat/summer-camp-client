import { Link } from "react-router-dom";
import logo from '../../assets/images/navLogo.png'
import { FaRegUserCircle  } from 'react-icons/fa'
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const {user, handleSignOut} = useContext(AuthContext)
    return (
        <div className="navbar bg-White shadow-md font-bold font-mono px-4 ">
            <div className="navbar-start">
                <img className="h-12 w-12" src={logo} alt="" />
                <a className="text-2xl ms-4">EduLine</a>
            </div>
            <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/'><li><a>Instructors</a></li></Link>
                    <Link to='/'> <li><a>Classes</a></li></Link>
                    <Link to='/'><li><a>Dashboard</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end gap-2">
            <FaRegUserCircle style={{ fontSize: '2rem' }}   />
            {
                    user?
                    <Link to='/signup'><button onClick={()=>handleSignOut()} className="btn  btn-primary bg-opacity-70 text-white font-bold px-5">Sign Out</button></Link>
                   
                    :
                    <Link to='/login'><button className="btn btn-outline btn-primary text-opacity-70 font-bold px-5">Sign in</button></Link>
          
        }
               
       



            </div>
        </div>

    );
};

export default Navbar;