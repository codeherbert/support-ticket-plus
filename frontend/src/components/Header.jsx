import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth);

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Support Desk</Link>
                <ul>
                    {user ? (
                        <button className="btn"><FaSignOutAlt />Logout</button>
                    ) : (
                    <>
                        <li>
                            <Link to="login">
                                <FaSignInAlt />Login
                            </Link>
                        </li>
                        <li>
                            <Link to="register">
                                <FaUser />Register
                            </Link>
                        </li>
                    </>
                    )}                    
                </ul>
            </div>
        </header>
    )
};

export default Header;