import React, { useContext, useState } from 'react';
import Card from '../../components/Card/Card';
import AppContext from '../../context';

const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="content">
      <div className="content__group">
        <h2 className="content__title">Мои закладки</h2>
      </div>

      <div className="card__list">
        {favorites.map((item, index) => (
          <Card
            key={index}
            personalFavorite={true}
            onFavorite={(item) => onAddToFavorite(item)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
