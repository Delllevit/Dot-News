import {Link, useLocation, useNavigate, useParams} from 'react-router-dom';
import './header.css';
import HamburgerMenu from "../../UI/hamburger-menu/hamburger-menu";
import {useContext} from "react";
import {AuthContext} from "../../../context";
import UserService from "../../API/UserService";

const Header = ({logo}) => {

	const locate = useLocation();
	const navigate = useNavigate();
	const {isAuth, setIsAuth, setModalActive} = useContext(AuthContext);
	let authLink, authText;

	const logout = () => {
		setModalActive(false);
		UserService.logout(setIsAuth);
	}

	if( isAuth && locate.pathname === '/personal/'){
		authLink = () => logout();
		authText = 'Вихід';

	} else if( isAuth ){
		authLink = () => navigate('/personal/');
		authText = 'Кабінет';

	} else{
		authLink = () => setModalActive(true);
		authText = 'Вхід';
	}

	return (
		<header className="header">
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
			<button className="auth-button" onClick={authLink}>{authText}</button>
		</header>
	);
};

export default Header;