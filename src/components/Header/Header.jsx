import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import './Header.scss';

const Header = ({ onClickCart }) => {
  const { totalPrice } = useTotalPrice();

  return (
    <header className="header">
      <Link to="/" className='header__link'>
        <div className="header__logo">
          <img src="/img/logo.png" alt="Логотип" className="header__logo_pic" />
          <div className="header__logo_info">
            <h1 className="header__title">React Sneakers</h1>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="header__list">
        <li className="header__item" onClick={onClickCart}>
          <svg className="icon" width={20} height={20} aria-hidden={true}>
            <use xlinkHref="/img/icons.svg#cart"></use>
          </svg>
          <span>{totalPrice} руб.</span>
        </li>
        <li className="header__item">
          <Link to="/favorites">
            <img src="/img/heart.svg" alt="Фавориты" className="icon" />
          </Link>
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
