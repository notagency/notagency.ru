import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Hero.module.scss';
import Animate from '../Animate';
import translate from '../translate';

const cx = classNames.bind(styles);


const Hero = ({strings}) => (
  <div className={cx(styles.hero)}>
    <div>
      <Animate type="top-to-bottom" startFrom={400}>
        <h1>{strings.title}</h1>
      </Animate>
    </div>
    <div>
      <Animate type="zoom-in" startFrom={500}>
        <h3>{strings.firstRow}</h3>
        <h3>{strings.secondRow}</h3>
      </Animate>
      <Animate type="zoom-in" startFrom={650}>
        <hr className={cx(styles.hr)}/>
      </Animate>
      <Animate type="bottom-to-top" startFrom={1000}>
        <h3>
          <span className={cx('screen-sm-min')}>{strings.anyQuestions}<br/></span>
          <a href="mailto:info@notagency.ru">info@notagency.ru</a>
        </h3>
      </Animate>
    </div>
  </div>
);

Hero.propTypes = {
  strings: PropTypes.object
};

export default translate('Index')(Hero);
