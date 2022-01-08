import React, { useState } from 'react';
import './Card.scss';

const Card = ({ item, onFavorite, onPlus, personalFavorite = false, personalCartAdded = false }) => {
  const [isAdded, setIsAdded] = useState(personalCartAdded);
  const [isFavorite, setIsFavorite] = useState(personalFavorite);

  // Инвертируем значение
  const handleClickPlus = () => {
    onPlus(item);
    setIsAdded(!isAdded);
  };

  const handleClickFavorite = () => {
    onFavorite(item);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card__item">
      <button className="btn card__favorite" onClick={handleClickFavorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Не лайкнуто" />
      </button>

      <img src={item.imgUrl} alt="" className="card__pic" />
      <h3 className="card__title">{item.title}</h3>
      <div className="card__desc">
        <div className="card__caption">
          <span className="card__price-title">Цена:</span>
          <span className="card__price-subtitle">{item.price} руб.</span>
        </div>
        <button className="btn" onClick={handleClickPlus}>
          <img src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="Плюс" className="card__icon-plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
