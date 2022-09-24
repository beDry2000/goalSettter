import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { reset, logout } from '../features/auth/authSlice';


const Header = () => {

    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul>
                {
                    user ? (
                        <li>
                            <button className='btn' onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link to='/login'>
                                    <FaSignInAlt /> Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <FaUser /> Register
                                </Link>
                            </li>
                        </>
                    )
                }
            </ul>
        </header>
    )
}

export default Header