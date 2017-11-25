import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { responsiveUtilities } from 'bootstrap-css';

import styles from './styles.css';
import Animate from '../Animate';
import translate from '../../i18n/Translate';

objectAssign(styles, responsiveUtilities);
const cx = classNames.bind(styles);

class IndexHero extends Animate {
    render() {
        return (
            <div className={cx('page-index-hero')}>
                <div>
                    <Animate type="top-to-bottom" startFrom={400}>
                        <h1>{ this.props.strings.title }</h1>
                    </Animate>
                </div>
                <div>
                    <Animate type="zoom-in" startFrom={500}>
                        <h3>{ this.props.strings.desc }</h3>
                    </Animate>
                    <Animate type="zoom-in" startFrom={650}>
                        <hr className={cx('hr')} />
                    </Animate>
                    <Animate type="bottom-to-top" startFrom={1000}>
                        <h3>
                            <span className={cx('hidden-xs')} >{ this.props.strings.anyQuestions }<br /></span>
                            <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                        </h3>
                    </Animate>
                </div>
            </div>
        );
    }
}

IndexHero.propTypes = {
    strings: PropTypes.object
};

export default translate('Index')(IndexHero);
