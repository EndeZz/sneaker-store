import React, { useState } from 'react';
import './Card.scss';

const Card = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);

  // Инвертируем значение
  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="card__item">
      <div className="card__favorite">
        <img src="/img/unliked.svg" alt="Не лайкнуто" />
      </div>

      <img src={item.imgUrl} alt="" className="card__pic" />
      <h3 className="card__title">{item.title}</h3>
      <div className="card__desc">
        <div className="card__caption">
          <span className="card__price-title">Цена:</span>
          <span className="card__price-subtitle">{item.price} руб.</span>
        </div>
        <button className="btn" onClick={handleClick}>
          <img src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="Плюс" className="card__icon-plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
