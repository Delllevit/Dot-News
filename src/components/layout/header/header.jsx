import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HamburgerMenu from '../../UI/hamburger-menu/hamburger-menu';
import {logout, showAuthForm} from '../../../store/actions';

function Header({ logo }) {
	const locate = useLocation();
	const navigate = useNavigate();

	const isAuth = useSelector((state) => {
		const { userReducer } = state;
		return userReducer.login;
	});

	const dispatch = useDispatch();

	let authLink,
		authText;

	if (isAuth && locate.pathname === '/personal/') {
		authLink = () => dispatch(logout());
		authText = 'Вихід';
	} else if (isAuth) {
		authLink = () => navigate('/personal/');
		authText = 'Кабінет';
	} else {
		authLink = () => dispatch(showAuthForm());
		authText = 'Вхід';
	}

	return (
		<header className="header container">
			<div className="left">
				<HamburgerMenu
					links={[
						{href: '/', title: 'Головна'},
						{href: '/about/', title: 'О нас'},
						{href: '/contacts/', title: 'Контакти'},
					]}
				/>
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
			</div>
			<button type="button" className="auth-button" onClick={authLink}>{authText}</button>
		</header>
	);
}

export default Header;
