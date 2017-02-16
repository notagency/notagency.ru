import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

import styles from '../../css/main.css';

const cx = classNames.bind(styles);

const Page404 = () => (
    <div>
        <h1 className={cx('hero-title')}>404</h1>
        <h3 className={cx('hero-subtitle')}>Страница не найдена</h3>
        <hr className={cx('hero-hr')} />
        <h3 className={cx('hero-subtitle')}>
            Вы можете перейти на <Link to="/">главную страницу</Link>,<br />
            или связаться с нами <a href="mailto:info@notagency.ru">info@notagency.ru</a>
        </h3>
    </div>
);

export default Page404;
