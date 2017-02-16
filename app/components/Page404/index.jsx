import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

import translate from '../../i18n/Translate';

import styles from '../../css/main.css';

const cx = classNames.bind(styles);

const Page404 = (props) => (
    <div>
        <h1 className={cx('hero-title')}>404</h1>
        <h3 className={cx('hero-subtitle')}>{props.strings.pageNotFound}</h3>
        <hr className={cx('hero-hr')} />
        <h3 className={cx('hero-subtitle')}>
            {props.strings.youCanReturn} <Link to="/">{props.strings.mainPage}</Link>,<br />
            {props.strings.contactUs} <a href="mailto:info@notagency.ru">info@notagency.ru</a>
        </h3>
    </div>
);

export default translate('Page404')(Page404);

