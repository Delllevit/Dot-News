import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({links}) => {
	const [activeMenu, setActiveMenu] = useState(false);

	return (
		<nav role="navigation" className={activeMenu ? 'menu active' : 'menu'}>
			<button className={'btn'} onClick={() => setActiveMenu(!activeMenu)}>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<ul className={'links'}>
				{links.map((link, index) =>
					<Link key={index} to={link.href}>
						<li>
							{link.title}
						</li>
					</Link>
				)}
			</ul>
		</nav>
	);
};

export default HamburgerMenu;