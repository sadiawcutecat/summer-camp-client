import { Link } from "react-router-dom";
import logo from '../../assets/images/navLogo.png'


const Navbar = () => {
    return (
        <div className="navbar bg-White shadow-md font-bold px-4 ">
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
            <FaUserCircle style={{ fontSize: '2rem' }} className="text-white" />
            <button className="btn btn-outline btn-primary text-opacity-70 font-bold px-5">Sign in</button>
            <button className="btn  btn-primary bg-opacity-70 text-white font-bold px-5">Sign up</button>
                {/* <FaUserCircle style={{ fontSize: '2rem' }} className="text-white" /> */}

                {/* <Link to='/signout'>
                    <button className= " py-2 px-5 border border-white">Sing Out</button>
                </Link>

                <Link to='/login'>
                    <button className=" py-2 px-5 border border-white">login</button>
                </Link> */}




            </div>
        </div>

    );
};

export default Navbar;