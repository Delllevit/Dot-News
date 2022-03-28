import React from 'react';

function Footer({ noSocial }) {
  let mainClasses = 'footer-block';

  if (noSocial) {
    mainClasses = 'footer-block full';
  }

  return (
    <footer>
      <div className={mainClasses}>
        <div className="menu">
          <div className="menu-item">
            <div className="item-title">Контакти</div>
            <div className="item-text">
              <a href="tel:604-844-9034">604-844-9034</a>
            </div>
            <div className="item-text">
              <a href="mailto:info@dot-news.ua">info@dot-news.ua</a>
            </div>
          </div>
          <div className="menu-item">
            <div className="item-title">ОФІС</div>
            <div className="item-text">
              Сухомлинського, 1, Луцьк, Волинська область, 43000
            </div>
          </div>
          <div className="menu-item">
            <div className="item-title">КАР’ЄРА</div>
            <div className="item-text">
              <a href="mailto:career@dot-news.ua">career@dot-news.ua</a>
            </div>
          </div>
        </div>
        <div className="copyright">© Copyright 2022</div>
        <div className="up">
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
              <path d="M100.606,100.606L150,51.212V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V51.212l49.394,49.394
C232.322,103.535,236.161,105,240,105c3.839,0,7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213l-75-75
c-5.857-5.858-15.355-5.858-21.213,0l-75,75c-5.858,5.857-5.858,15.355,0,21.213C85.251,106.463,94.749,106.463,100.606,100.606z"
              />
            </svg>
          </a>
        </div>
      </div>

      {!noSocial && <div className="social" />}

    </footer>
  );
}

export default Footer;
