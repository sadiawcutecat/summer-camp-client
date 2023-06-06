import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-accent font-bold px-4">
            <div className="navbar-start">
                <img className="h-9 w-9" src="" alt="" />
                <a className="text-2xl text-white ms-4">Foreign Language <br /> Learning School</a>
            </div>
            <div className="navbar-center  lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/AllToys'><li><a>Instructors</a></li></Link>
                    <Link to='/myToys'> <li><a>Classes</a></li></Link>
                    <Link to='/AddToys'><li><a>Dashboard</a></li></Link>


                    <Link to='/blogs'><li><a>Blogs</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* <FaUserCircle style={{ fontSize: '2rem' }} className="text-white" /> */}

                <Link to='/signout'>
                    <button className="text-white py-2 px-5 border border-white">Sing Out</button>
                </Link>

                <Link to='/login'>
                    <button className="text-white py-2 px-5 border border-white">login</button>
                </Link>




            </div>
        </div>

    );
};

export default Navbar;