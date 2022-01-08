import './styles/index.scss';
import React from 'react';

const App = () => {
  return (
    <div className="container">
      <aside className="drawer">
        <div className="drawer__content">
          <h2 className="drawer__title">Корзина</h2>
          <ul className="cart__list">
            <li className="cart__item">
              <img src="/img/sneakers/1.jpg" alt="Кроссовки" className="cart__pic" />
              <div className="cart__caption">
                <h3 className="cart__title">Мужские кроссовки</h3>
                <span className="cart__price">1999 руб.</span>
              </div>
              <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" />
            </li>

            <li className="cart__item">
              <img src="/img/sneakers/1.jpg" alt="Кроссовки" className="cart__pic" />
              <div className="cart__caption">
                <h3 className="cart__title">Мужские кроссовки</h3>
                <span className="cart__price">1999 руб.</span>
              </div>
              <img src="/img/btn-remove.svg" alt="Удалить" className="cart__icon-remove" />
            </li>
          </ul>

          <ul className="cart__total">
            <li className="cart__info">
              <span>Итого:</span>
              <div className="cart__border-bottom"></div>
              <b>21 212 руб.</b>
            </li>
            <li className="cart__info">
              <span>Налог 5%:</span>
              <div className="cart__border-bottom"></div>
              <b>1111 руб.</b>
            </li>
            <li className="cart__info">
              <button className="btn_green btn_green_m">
                Оформить заказ
                <img src="/img/arrow.svg" alt="Удалить" className="cart__icon-arrow" />
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <header className="header">
        <div className="header__logo">
          <img src="/img/logo.png" alt="Логотип" className="header__logo_pic" />
          <div className="header__logo_info">
            <h1 className="header__title">React Sneakers</h1>
            <p className="header__subtitle">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header__list">
          <li className="header__item">
            <svg className="icon" width={20} height={20} aria-hidden={true}>
              <use xlinkHref="/img/icons.svg#cart"></use>
            </svg>
            <span>1205 руб.</span>
          </li>
          <li className="header__item">
            <svg className="icon" width={20} height={20} aria-hidden={true}>
              <use xlinkHref="/img/icons.svg#user"></use>
            </svg>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="content__group">
          <h2 className="content__title">Все кроссовки</h2>
          <div className="search">
            <img src="/img/search.svg" alt="Поиск" className="search__icon" />
            <input type="text" placeholder="Поиск..." className="search__field" />
          </div>
        </div>

        <ul className="card__list">
          <li className="card__item">
            <div className="card__favorite">
              <img src="/img/unliked.svg" alt="Не лайкнуто" />
            </div>

            <img src="/img/sneakers/1.jpg" alt="" className="card__pic" />
            <h3 className="card__title">Мужские кроссовки</h3>
            <div className="card__desc">
              <div className="card__caption">
                <span className="card__price-title">Цена:</span>
                <span className="card__price-subtitle">12 999 руб.</span>
              </div>
              <button className="btn">
                <img src="/img/plus.svg" alt="Плюс" className="card__icon-plus" />
              </button>
            </div>
          </li>
          <li className="card__item">
            <img src="/img/sneakers/1.jpg" alt="" className="card__pic" />
            <h3 className="card__title">Мужские кроссовки</h3>
            <div className="card__desc">
              <div className="card__caption">
                <span>Цена:</span>
                <span>12 999 руб.</span>
              </div>
              <button className="btn">
                <img src="/img/plus.svg" alt="Плюс" className="card__icon-plus" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
