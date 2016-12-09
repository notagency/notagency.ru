import React, { Component } from 'react';
import { Link } from 'react-router'

class Page404 extends Component {
  render() {
      return (
        <div className="slide slide_hero" data-slide="hero">
            <div className="hero">
                <h1 className="hero__title">404</h1>
                <h3 className="hero__subtitle">Страница не найдена</h3>
                <hr className="hero__hr" />
                <h3 className="hero__subtitle">
                    Вы можете перейти на <Link to="/">главную страницу</Link>,<br/>или связаться с нами <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                </h3>
            </div>
        </div>
      );
  }
};

export default Page404;