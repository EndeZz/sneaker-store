import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <ul className="card__list">
      <li className="card__item">
        <div className="card__favorite">
          <img src="/img/unliked.svg" alt="Не лайкнуто" />
        </div>

        <img src="/img/sneakers/1.jpg" alt="" className="card__pic" />
        <h3 className="card__title">Мужские кроссовки</h3>
        <div className="card__desc">
          <div className="card__caption">
            <span className="card__price-title">Цена:</span>
            <span className="card__price-subtitle">12 999 руб.</span>
          </div>
          <button className="btn">
            <img src="/img/plus.svg" alt="Плюс" className="card__icon-plus" />
          </button>
        </div>
      </li>

      <li className="card__item">
        <img src="/img/sneakers/1.jpg" alt="" className="card__pic" />
        <h3 className="card__title">Мужские кроссовки</h3>
        <div className="card__desc">
          <div className="card__caption">
            <span>Цена:</span>
            <span>12 999 руб.</span>
          </div>
          <button className="btn">
            <img src="/img/plus.svg" alt="Плюс" className="card__icon-plus" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Card;
