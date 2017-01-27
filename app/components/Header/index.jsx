import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import objectAssign from 'object-assign';
import Animate from 'containers/Animate';
import classNames from 'classnames/bind';
import styles from './styles';
import { grid, type } from 'bootstrap-css'

objectAssign(styles, grid, type);
const cx = classNames.bind(styles);

class Header extends Component {
  render() {
      return (
            <div className={cx('header')}>
                <div className={cx('inner', 'row')}>
                    <Animate type="left-to-right" startFrom={200}  >
                        <div className={cx('col-xs-6')}>
                            <h2 className={cx('logo')}>
                                <Link to="/">
                                    <span>NotAgency</span>
                                </Link>
                            </h2>
                        </div>
                    </Animate>
                        
                    <div className={cx('col-xs-6', 'text-right', 'socials')}>
                        <a className={cx('social', 'social_facebook')} href="https://www.facebook.com/notagency.ru/" target="_blank">
                            <Animate type="right-to-left" startFrom={1000} >
                                <i className={'icons icons_facebook ' + cx('social_facebook__icon')}></i>
                            </Animate>
                        </a>
                        <a className={cx('social', 'social_github')} href="https://github.com/notagency/" target="_blank">
                            <Animate type="right-to-left" startFrom={1100} >
                                <i className={'icons icons_github ' + cx('social_github__icon')}></i>
                            </Animate>
                        </a>
                    </div>
                </div>
            </div>
      );
  }
};

export default Header;