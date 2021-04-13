import logo from "./images/logo.svg";
import {Link} from "react-router-dom";

function Header({currentUser}) {
    return (
        <div className='bg-dark py-3 row px-3 align-items-center h5 mb-0'>
            <img src={logo} alt="" width='50' height='50' className='ml-3'></img>
            <Link to="/">Schedule <span className='text-danger'>generator</span></Link>
            <Link to="/login" className='ml-auto'>Log in</Link>
            <Link to="/register" className='mx-3 btn btn-primary'>Sign up</Link>
        </div>
    );
}
export default Header;