import React, { PropTypes } from 'react';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { grid } from 'bootstrap-css';

import Animate from '../Animate';
import styles from './styles.css';
import translate from '../../i18n/Translate';

objectAssign(styles, grid);
const cx = classNames.bind(styles);

const IndexAbout = (props) => (
    <div className={cx('about', 'container-fluid')}>
        <div className={cx('row')}>
            <div className={cx('col-md-4')}>
                <Animate type="bottom-to-top" startFrom={1000}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            65
                        </div>
                        <div className={cx('text')}>
                            {props.strings.agenciesLabel}<br />
                            <strong>Articul&nbsp;Media, CreativePeople,<br />
                                ZephyrLab, NotaMedia</strong>
                        </div>
                    </div>
                </Animate>
            </div>
            <div className={cx('col-md-4')}>
                <Animate type="bottom-to-top" startFrom={1100}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            20
                        </div>
                        <div className={cx('text')}>
                            {props.strings.clientsLabel}<br />
                            <strong>Yota, {props.strings.npfSberbanka}<br />
                                {props.strings.andOthers}</strong>
                        </div>
                    </div>
                </Animate>
            </div>
            <div className={cx('col-md-4')}>
                <Animate type="bottom-to-top" startFrom={1200}>
                    <div className={cx('item')}>
                        <div className={cx('digit')}>
                            9
                        </div>
                        <div className={cx('text')}>
                            {props.strings.years}
                            <br /><strong>{props.strings.inWebIndustry}</strong>
                        </div>
                    </div>
                </Animate>
            </div>
        </div>
    </div>
);

IndexAbout.propTypes = {
    strings: PropTypes.object
};

export default translate('Index')(IndexAbout);
