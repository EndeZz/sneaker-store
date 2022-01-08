import React from 'react';
import './Drawer.scss';

const Drawer = ({ onClose, items = [], onRemove }) => {
  return (
    <aside className="drawer">
      <div className="drawer__content">
        <h2 className="drawer__title">
          Корзина
          <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" onClick={onClose} />
        </h2>

        <ul className="cart__list">
          {items.map((item, i) => (
            <li key={i} className="cart__item">
              <img src={item.imgUrl} alt="Кроссовки" className="cart__pic" />
              <div className="cart__caption">
                <h3 className="cart__title">{item.title}</h3>
                <span className="cart__price">{item.price} руб.</span>
              </div>
              <img
                src="/img/btn-remove.svg"
                alt="Удалить"
                className="cart__icon-remove"
                onClick={() => onRemove(item.id)}
              />
            </li>
          ))}
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

export default Drawer;
