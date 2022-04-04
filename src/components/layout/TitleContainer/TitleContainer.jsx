import React from 'react';
import dribble from '../../../static/images/dribble.svg';
import facebook from '../../../static/images/facebook.svg';
import instagram from '../../../static/images/instagram.svg';
import twitter from '../../../static/images/twitter.svg';

const TitleContainer = ({ title, previewTextShow, refElement }) => {
	return (
		<div className="title__container container" ref={refElement}>
			<div className="social">
				<ul className="list">
					<li>
						<a href="https://dribbble.com/" target="_blank" rel="noreferrer">
							<img src={dribble} alt="" />
						</a>
					</li>
					<li>
						<a href="https://facebook.com/" target="_blank" rel="noreferrer">
							<img src={facebook} alt="" />
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
							<img src={instagram} alt="" />
						</a>
					</li>
					<li>
						<a href="https://twitter.com/" target="_blank" rel="noreferrer">
							<img src={twitter} alt="" />
						</a>
					</li>
				</ul>
				<div className="title">
					<span />
					Ми в соц-мережах
				</div>
			</div>
			<h1>{title}</h1>
			{previewTextShow && (
				<div className="preview-text">
					<h2>Увесь світ</h2>
					<div className="text">Свіжа повістка со всего світу, будь в курсі усіх подій</div>
				</div>
			)}
		</div>
	);
};

export default TitleContainer;
