import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { grid, type } from 'bootstrap-css';

import Animate from '../Animate';
import styles from './styles.css';

import { changeLanguage } from '../../state/lang';

objectAssign(styles, grid, type);
const cx = classNames.bind(styles);

const Header = ({ currentLanguage, onChangeLanguage, theme }) => (
    <div className={cx('header')}>
        <div className={cx('inner', 'row')}>
            <Animate type="left-to-right" startFrom={200}>
                <div className={cx('col-xs-6')}>
                    <h2 className={cx('logo', 'logo_' + theme)}>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.39 33.29">
                                <path d="M13.82,19.09L19.13,1.7l5.38,17.37L36.92,32.36l-17.73-4L1.47,32.44Z"
                                      fill="transparent" stroke={theme === 'black' ? '#fff' : '#f70236'}
                                      strokeMiterlimit="10" />
                            </svg>
                            <span>NotAgency</span>
                        </Link>
                    </h2>
                </div>
            </Animate>

            <div className={cx('col-xs-5', 'text-right', 'socials')}>
                <a className={cx('social', 'social_facebook')} href="https://www.facebook.com/notagency.ru/"
                   target="_blank" rel="noopener noreferrer">
                    <Animate type="right-to-left" startFrom={1000}>
                        <i className={'icons icons_facebook ' + cx('social_facebook__icon', 'social_facebook__icon_' + theme)} />
                    </Animate>
                </a>
                <a className={cx('social', 'social_github', 'social_github_' + theme)}
                   href="https://github.com/notagency/" target="_blank" rel="noopener noreferrer">
                    <Animate type="right-to-left" startFrom={1100}>
                        <i className={'icons icons_github ' + cx('social_github__icon', 'social_github__icon_' + theme)} />
                    </Animate>
                </a>
            </div>
            <div className={cx('col-xs-1', 'langs')}>
                <Animate type="right-to-left" startFrom={1200}>
                    <button onClick={ (e) => {
                        e.preventDefault();
                        onChangeLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
                    }}>{currentLanguage}</button>
                </Animate>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    currentLanguage: PropTypes.string,
    onChangeLanguage: PropTypes.func,
    theme: PropTypes.string
};

const mapStateToProps = (state) => ({
    currentLanguage: state.lang.code
});

const mapDispatchToProps = dispatch => ({
    onChangeLanguage: lang => dispatch(changeLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
