import React from 'react';
import './Drawer.scss';

const Header = () => {
  return (
    <aside className="drawer hidden">
      <div className="drawer__content">
        <h2 className="drawer__title">
          Корзина
          <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" />
        </h2>

        <ul className="cart__list">
          <li className="cart__item">
            <img src="/img/sneakers/1.jpg" alt="Кроссовки" className="cart__pic" />
            <div className="cart__caption">
              <h3 className="cart__title">Мужские кроссовки</h3>
              <span className="cart__price">1999 руб.</span>
            </div>
            <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" />
          </li>

          <li className="cart__item">
            <img src="/img/sneakers/1.jpg" alt="Кроссовки" className="cart__pic" />
            <div className="cart__caption">
              <h3 className="cart__title">Мужские кроссовки</h3>
              <span className="cart__price">1999 руб.</span>
            </div>
            <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" />
          </li>
        </ul>

        <ul className="cart__total">
          <li className="cart__info">
            <span>Итого:</span>
            <div className="cart__border-bottom"></div>
            <b>21 212 руб.</b>
          </li>
          <li className="cart__info">
            <span>Налог 5%:</span>
            <div className="cart__border-bottom"></div>
            <b>1111 руб.</b>
          </li>
          <li className="cart__info">
            <button className="btn_green btn_green_m">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Удалить" className="cart__icon-arrow" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Header;
