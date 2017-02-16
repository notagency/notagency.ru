import React from 'react';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { grid } from 'bootstrap-css';

import Animate from '../Animate';
import styles from './styles.css';
// import translate from 'i18n/Translate';

objectAssign(styles, grid);
const cx = classNames.bind(styles);

const IndexAbout = () => (
    <div className={cx('about', 'container-fluid')}>
        <div className={cx('row')}>
            <div className={cx('col-sm-4')}>
                <Animate type="bottom-to-top" startFrom={1000}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            65
                        </div>
                        <div className={cx('text')}>
                            проектов по заказу агентств<br />
                            <strong>Articul&nbsp;Media, CreativePeople,<br />
                                ZephyrLab, NotaMedia</strong>
                        </div>
                    </div>
                </Animate>
            </div>
            <div className={cx('col-sm-4')}>
                <Animate type="bottom-to-top" startFrom={1100}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            20
                        </div>
                        <div className={cx('text')}>
                            проектов по заказу клиентов<br />
                            <strong>Yota, НПФ&nbsp;Сбербанка<br />и других</strong>
                        </div>
                    </div>
                </Animate>
            </div>
            <div className={cx('col-sm-4')}>
                <Animate type="bottom-to-top" startFrom={1200}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            8
                        </div>
                        <div className={cx('text')}>
                            лет работы
                            <br /><strong>в веб&#8209;индустрии</strong>
                        </div>
                    </div>
                </Animate>
            </div>
        </div>
    </div>
);

export default IndexAbout;
