import React from 'react'
import objectAssign from 'object-assign'
import Animate from 'components/Animate'
import classNames from 'classnames/bind'
import styles from 'css/main'
import { type } from 'bootstrap-css'

import translate from 'i18n/Translate'

objectAssign(styles, type);
const cx = classNames.bind(styles);

class IndexHero extends Animate {
  render() {
      return (
        <div>
            <Animate type="top-to-bottom" startFrom={400} >
                <h1 className={cx('hero-title')}>{ this.props.strings.title }</h1>
            </Animate>
            <Animate type="zoom-in" startFrom={500} >
                <h3 className={cx('hero-subtitle')}>{ this.props.strings.desc }</h3>
            </Animate>
            <Animate type="zoom-in" startFrom={650} >
                <hr className={cx('hero-hr')} />
            </Animate>
            <Animate type="bottom-to-top" startFrom={1000} >
                <h3 className={cx('hero-subtitle')}>
                    { this.props.strings.anyQuestions }<br/>
                    <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                </h3>
            </Animate>
        </div>
      );
  }
};

export default translate('Index')(IndexHero);