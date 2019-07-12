import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeLanguage } from '../../reducers/LangReducer';
import Logo from '../Logo';

import Animate from '../Animate';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import IconFacebook from "../IconFacebook";
import IconGithub from "../IconGithub";

const cx = classNames.bind(styles);

const Header = ({currentLanguage, onChangeLanguage, theme}) => {
  const anotherLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  return (
    <div className={cx(styles.header, theme)}>
      <div className={cx(styles.inner)}>
        <div>
          <Animate type="left-to-right" startFrom={200}>
            <div className={cx(styles.logo, theme)}>
              <NavLink to="/">
                <Logo/>
                <span>NotAgency</span>
              </NavLink>
            </div>
          </Animate>
        </div>

        <div className={cx('text-right')}>
          <div className={cx(styles.socials)}>
            <a className={cx('zoom-in-link', styles.link)} href="https://www.facebook.com/notagency.ru/"
               target="_blank" rel="noopener noreferrer">
              <Animate type="right-to-left" startFrom={1000}>
                <div className={cx(styles.icon, styles.facebook, theme)}>
                  <IconFacebook />
                </div>
              </Animate>
            </a>
            <a className={cx('zoom-in-link', styles.link)}
               href="https://github.com/notagency/" target="_blank" rel="noopener noreferrer">
              <Animate type="right-to-left" startFrom={1100}>
                <div className={cx(styles.icon, styles.github, theme)}>
                  <IconGithub />
                </div>
              </Animate>
            </a>
          </div>
          <div className={cx('langs')}>
            <Animate type="right-to-left" startFrom={1400}>
              <button className={cx('zoom-in-link', theme)} onClick={(e) => {
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
