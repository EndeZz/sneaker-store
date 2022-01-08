import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/img/logo.png" alt="Логотип" className="header__logo_pic" />
        <div className="header__logo_info">
          <h1 className="header__title">React Sneakers</h1>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="header__list">
        <li className="header__item">
          <svg className="icon" width={20} height={20} aria-hidden={true}>
            <use xlinkHref="/img/icons.svg#cart"></use>
          </svg>
          <span>1205 руб.</span>
        </li>
        <li className="header__item">
          <svg className="icon" width={20} height={20} aria-hidden={true}>
            <use xlinkHref="/img/icons.svg#user"></use>
          </svg>
        </li>
      </ul>
    </header>
  );
};

export default Header;
