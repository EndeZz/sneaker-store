import './styles/index.scss';
import React, { createContext, useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import axios from 'axios';
import Home from './pages/Home/Home';
import { Route } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import AppContext from './context';

const App = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url_api = 'https://61d992cfce86530017e3cb6e.mockapi.io';

  useEffect(() => {
    // fetch(url_api)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setData(data);
    //   });

    const fetchData = async () => {
      setIsLoading(true);
      const cartResponse = await axios.get(`${url_api}/cart`);
      const favoritesResponse = await axios.get(`${url_api}/favorites`);
      const dataResponse = await axios.get(`${url_api}/items`);

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setData(dataResponse.data);
    };

    fetchData();
  }, [url_api]);

  const onClickCart = () => {
    setCartOpened(!cartOpened);
  };

  const onAddToCart = (obj) => {
    try {
      // если в корзине есть такой товара, то исключи, иначе сохрани и отправь на бэк
      if (cartItems.find((item) => +item.id === +obj.id)) {
        axios.delete(`${url_api}/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        // Отправка объектов на mockapi
        axios.post(`${url_api}/cart`, obj);
        // Берет старые данные cartItems и в конце пушит новые
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      throw Error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => +favObj.id === +obj.id)) {
        axios.delete(`${url_api}/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        const { data } = await axios.post(`${url_api}/favorites`, obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      throw Error(error);
    }
  };

  const onRemoveFromCart = (id) => {
    // Отправка объектов на mockapi
    axios.delete(`${url_api}/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (e) => {
    console.log(e);
    setSearchValue(e);
  };

  const hasItemAdded = (id) => {
    return cartItems.some((obj) => +obj.id === +id)
  }

  return (
    <AppContext.Provider value={{ data, cartItems, favorites, hasItemAdded }}>
      <div className="container">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => onClickCart()} onRemove={onRemoveFromCart} />
        )}
        <Header onClickCart={() => onClickCart()} />

        <Route path="/" exact>
          <Home
            data={data}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            onChangeSearchInput={onChangeSearchInput}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites">
          <Favorites onAddToFavorite={onAddToFavorite} />
        </Route>
      </div>
    </AppContext.Provider>
  );
};

export default App;
