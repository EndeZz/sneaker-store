import React, { useState } from 'react';
import { useContext } from 'react';
import Card from '../../components/Card/Card';
import AppContext from '../../context';

const Home = ({
  data,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchInput,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10)] : filteredItems).map((item, i) => (
      <Card
        key={i}
        item={item}
        onFavorite={(item) => onAddToFavorite(item)}
        onPlus={(item) => onAddToCart(item)}
        isLoading={isLoading}
      />
    ));
  };
  return (
    <div className="content">
      <div className="content__group">
        <h2 className="content__title">
          {searchValue ? `поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h2>
        <div className="search">
          <img src="/img/search.svg" alt="Поиск" className="search__icon" />
          <input
            type="text"
            placeholder="Поиск..."
            className="search__field"
            value={searchValue}
            onChange={(e) => onChangeSearchInput(e.target.value)}
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              src="/img/btn-remove.svg"
              alt="Удалить"
              className=" cart__icon-clear "
            />
          )}
        </div>
      </div>

      <div className="card__list">{renderItems()}</div>
    </div>
  );
};

export default Home;
