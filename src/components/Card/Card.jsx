import React, { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
import './Card.scss';

const Card = ({
  id,
  title,
  imgUrl,
  price,
  onFavorite,
  onPlus,
  personalFavorite = false,
  isLoading = false,
}) => {
  const { hasItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(personalFavorite);

  // const { id, title, imgUrl, price } = item;

  // console.log(item.title);

  const items = { id, parentId: id, title, imgUrl, price };

  // Инвертируем значение
  const handleClickPlus = () => {
    onPlus(items);
  };

  const handleClickFavorite = () => {
    onFavorite(items);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card__item">
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={240}
          viewBox="0 0 160 240"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="165" rx="10" ry="10" width="150" height="15" />
          <rect x="0" y="183" rx="10" ry="10" width="100" height="15" />
          <rect x="0" y="211" rx="10" ry="10" width="80" height="24" />
          <rect x="118" y="206" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <button className="btn card__favorite" onClick={handleClickFavorite}>
            <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Не лайкнуто" />
          </button>

          <img src={imgUrl} alt="" className="card__pic" />
          <h3 className="card__title">{title}</h3>
          <div className="card__desc">
            <div className="card__caption">
              <span className="card__price-title">Цена:</span>
              <span className="card__price-subtitle">{price} руб.</span>
            </div>
            <button className="btn" onClick={handleClickPlus}>
              <img
                src={hasItemAdded(id) ? '/img/btn-checked.svg' : '/img/plus.svg'}
                alt="Плюс"
                className="card__icon-plus"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
