import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles';

const cx = classNames.bind(styles);

class PageWalkingDead extends Component {
  render() {
    return (
        <div className={cx('viewport')}>
            <iframe src="http://not:agency@wd.notagency.ru/" width="100%" height="100%"></iframe>
        </div>
    );
  }
}

export default PageWalkingDead;