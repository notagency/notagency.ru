import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

import Animate from '../Animate';
import styles from './styles.css';

import { changeLanguage } from '../../state/lang';

const cx = classNames.bind(styles);

const Header = ({ currentLanguage, onChangeLanguage, theme }) => {
    const anotherLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    return (
        <div className={cx('header', theme)}>
            <div className={cx('inner', 'row')}>
                <div className={cx('col-xs-6', 'header_left')}>
                    <Animate type="left-to-right" startFrom={200}>
                        <div className={cx('logo', theme)}>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.39 33.29">
                                    <path d="M13.82,19.09L19.13,1.7l5.38,17.37L36.92,32.36l-17.73-4L1.47,32.44Z"
                                          fill="transparent" stroke={theme === 'black' ? '#fff' : '#f70236'}
                                          strokeMiterlimit="10" />
                                </svg>
                                <span>NotAgency</span>
                            </Link>
                        </div>
                    </Animate>
                </div>

                <div className={cx('col-xs-6', 'header_right', 'text-right')}>
                    <div className={cx('socials')}>
                        <a className={cx('zoom-in-link', 'social_link')} href="https://www.facebook.com/notagency.ru/"
                           target="_blank" rel="noopener noreferrer">
                            <Animate type="right-to-left" startFrom={1000}>
                                <div className={cx('social_icon', 'facebook', theme)} >
                                    <svg className={cx('social_icon_svg')}>
                                        <use xlinkHref="#spr-facebook-squared" />
                                    </svg>
                                </div>
                            </Animate>
                        </a>
                        <a className={cx('zoom-in-link', 'social_link')}
                           href="https://github.com/notagency/" target="_blank" rel="noopener noreferrer">
                            <Animate type="right-to-left" startFrom={1100}>
                                <div className={cx('social_icon', 'github', theme)} >
                                    <svg className={cx('social_icon_svg')}>
                                        <use xlinkHref="#spr-github-round" />
                                    </svg>
                                </div>
                            </Animate>
                        </a>
                    </div>
                    <div className={cx('langs')}>
                        <Animate type="right-to-left" startFrom={1400}>
                            <button className={cx('zoom-in-link', theme)} onClick={ (e) => {
                                e.preventDefault();
                                onChangeLanguage(anotherLanguage);
                            }}>{anotherLanguage}</button>
                        </Animate>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
