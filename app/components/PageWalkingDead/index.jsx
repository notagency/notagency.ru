import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const PageWalkingDead = () => (
    <div className={cx('viewport')} >
        <iframe src="http://not:agency@wd.notagency.ru/" width="100%" height="100%" />
    </div>
);

export default PageWalkingDead;
