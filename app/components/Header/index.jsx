import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import objectAssign from 'object-assign';
import Animate from 'components/Animate';
import classNames from 'classnames/bind';
import styles from './styles';
import { grid, type } from 'bootstrap-css';

import { changeLanguage } from '../../state/lang';

import { createAction } from 'redux-actions';

objectAssign(styles, grid, type);
const cx = classNames.bind(styles);

let Header = ({currentLanguage, onChangeLanguage, theme}) => (
    <div className={cx('header')}>
        <div className={cx('inner', 'row')}>
            <Animate type="left-to-right" startFrom={200}  >
                <div className={cx('col-xs-6')}>
                    <h2 className={cx('logo', 'logo_' + theme)}>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.39 33.29">
                              <path d="M13.82,19.09L19.13,1.7l5.38,17.37L36.92,32.36l-17.73-4L1.47,32.44Z" fill="transparent" stroke={theme == "black" ? "#fff" : "#f70236"} strokeMiterlimit="10"/>
                            </svg>
                            <span>NotAgency</span>
                        </Link>
                    </h2>
                </div>
            </Animate>
                
            <div className={cx('col-xs-5', 'text-right', 'socials')}>
                <a className={cx('social', 'social_facebook')} href="https://www.facebook.com/notagency.ru/" target="_blank">
                    <Animate type="right-to-left" startFrom={1000} >
                        <i className={'icons icons_facebook ' + cx('social_facebook__icon', 'social_facebook__icon_' + theme)}></i>
                    </Animate>
                </a>
                <a className={cx('social', 'social_github', 'social_github_' + theme)} href="https://github.com/notagency/" target="_blank">
                    <Animate type="right-to-left" startFrom={1100} >
                        <i className={'icons icons_github ' + cx('social_github__icon', 'social_github__icon_' + theme)}></i>
                    </Animate>
                </a>
            </div>
            <div className={cx('col-xs-1', 'langs')}>
                <Animate type="right-to-left" startFrom={1200} >
                    <a href="#" onClick={ (e) => {
                            e.preventDefault();
                            onChangeLanguage(currentLanguage == 'ru' ? 'en' : 'ru') 
                        }}>{currentLanguage}</a>
                </Animate>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    currentLanguage: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    currentLanguage: state.lang.code
})

const mapDispatchToProps = dispatch => ({
    //onChangeLanguage: lang => dispatch({ type: CHANGE_LANGUAGE, payload: lang })
    onChangeLanguage: lang => changeLanguage(dispatch, lang)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);