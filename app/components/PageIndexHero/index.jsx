import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { type } from 'bootstrap-css';

import styles from '../../css/main.css';
import Animate from '../Animate';
import translate from '../../i18n/Translate';

objectAssign(styles, type);
const cx = classNames.bind(styles);

class IndexHero extends Animate {
    render() {
        return (
            <div>
                <Animate type="top-to-bottom" startFrom={400}>
                    <h1>{ this.props.strings.title }</h1>
                </Animate>
                <Animate type="zoom-in" startFrom={500}>
                    <h3>{ this.props.strings.desc }</h3>
                </Animate>
                <Animate type="zoom-in" startFrom={650}>
                    <hr className={cx('hero-hr')} />
                </Animate>
                <Animate type="bottom-to-top" startFrom={1000}>
                    <h3>
                        { this.props.strings.anyQuestions }<br />
                        <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                    </h3>
                </Animate>
            </div>
        );
    }
}

IndexHero.propTypes = {
    strings: PropTypes.object
};

export default translate('Index')(IndexHero);
