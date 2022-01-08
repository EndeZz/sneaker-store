import React, { useState } from 'react';
import Card from '../../components/Card/Card';

const Favorites = ({ data, onAddToFavorite }) => {
  return (
    <div className="content">
      <div className="content__group">
        <h2 className="content__title">Мои закладки</h2>
      </div>

      <div className="card__list">
        {data.map((item, index) => (
          <Card
            key={index}
            item={item}
            personalFavorite={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
