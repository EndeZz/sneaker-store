import './styles/index.scss';
import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

const App = () => {
  return (
    <div className="container">
      <Drawer />

      <Header />

      <div className="content">
        <div className="content__group">
          <h2 className="content__title">Все кроссовки</h2>
          <div className="search">
            <img src="/img/search.svg" alt="Поиск" className="search__icon" />
            <input type="text" placeholder="Поиск..." className="search__field" />
          </div>
        </div>

        <Card></Card>
      </div>
    </div>
  );
};

export default App;
