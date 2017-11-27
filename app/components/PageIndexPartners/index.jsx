import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Animate from '../Animate';
import styles from './styles.css';
import translate from '../../i18n/Translate';

const cx = classNames.bind(styles);

const IndexPartners = (props) => (
    <div className={cx('partners')}>
        <Animate type="bottom-to-top" startFrom={1300}>
            <div className={cx('text-center', 'partners-title')}>{ props.strings.trusted }</div>
        </Animate>
        <div className={cx('partners-list')}>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1300}>
                    <img src="/app/i/partners/articulmedia.png" alt="Articul Media" className={cx('articul')} />
                </Animate>
            </div>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1350}>
                    <img src="/app/i/partners/cpeople.png" alt="CreativePeople" className={cx('cpeople')} />
                </Animate>
            </div>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1400}>
                    <img src="/app/i/partners/yota.png" alt="Yota" className={cx('yota')} />
                </Animate>
            </div>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1450}>
                    <img src="/app/i/partners/notamedia.png" alt="Notamedia" className={cx('nota')} />
                </Animate>
            </div>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1500}>
                    <img src="/app/i/partners/npfsb.png" alt="НПФ Сбербанка" className={cx('npfsb')} />
                </Animate>
            </div>
            <div className={cx('partner-logo')} >
                <Animate type="bottom-to-top" startFrom={1550}>
                    <img src="/app/i/partners/zephyr.png" alt="Zephyrlab" className={cx('zephyr')} />
                </Animate>
            </div>
        </div>
    </div>
);

IndexPartners.propTypes = {
    strings: PropTypes.object
};

export default translate('Index')(IndexPartners);
