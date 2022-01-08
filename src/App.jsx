import './styles/index.scss';
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const App = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  const url_api = 'https://61d992cfce86530017e3cb6e.mockapi.io/items';

  useEffect(() => {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [url_api]);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToCart = (obj) => {
    // Берет старые данные cartItems и в конце пушит новые
    setCartItems(prev => [...prev, obj]);
  };

  return (
    <div className="container">
      {cartOpened && <Drawer items={cartItems} onClose={() => onClickCart()} />}
      <Header onClickCart={() => onClickCart()} />
      <div className="content">
        <div className="content__group">
          <h2 className="content__title">Все кроссовки</h2>
          <div className="search">
            <img src="/img/search.svg" alt="Поиск" className="search__icon" />
            <input type="text" placeholder="Поиск..." className="search__field" />
          </div>
        </div>

        <div className="card__list">
          {data.map((item, i) => (
            <Card key={i} item={item} onPlus={() => onAddToCart(item)}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
