import './styles/index.scss';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const url_api = 'https://61d992cfce86530017e3cb6e.mockapi.io/items';
  const url_api_cart = 'https://61d992cfce86530017e3cb6e.mockapi.io/cart';

  useEffect(() => {
    // fetch(url_api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   });

    axios.get(url_api).then((res) => setData(res.data));
    axios.get(url_api_cart).then((res) => setCartItems(res.data));
  }, [url_api]);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToCart = (obj) => {
    // Отправка объектов на mockapi
    axios.post(url_api_cart, obj);
    // Берет старые данные cartItems и в конце пушит новые
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    // Отправка объектов на mockapi
    axios.delete(`${url_api_cart}/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    console.log(e);
    setSearchValue(e);
  };

  return (
    <div className="container">
      {cartOpened && <Drawer items={cartItems} onClose={() => onClickCart()} onRemove={onRemoveFromCart} />}
      <Header onClickCart={() => onClickCart()} />
      <div className="content">
        <div className="content__group">
          <h2 className="content__title">{searchValue ? `поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h2>
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

        <div className="card__list">
          {data
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, i) => (
              <Card key={i} item={item} onPlus={() => onAddToCart(item)}></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
