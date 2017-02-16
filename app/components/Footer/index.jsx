import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import classNames from 'classnames/bind';
import { type } from 'bootstrap-css';

import Animate from '../Animate';
import styles from './styles.css';

import translate from '../../i18n/Translate';

objectAssign(styles, type);
const cx = classNames.bind(styles);

const Footer = props => (
    <div className={cx('footer')}>
        <Animate type="bottom-to-top" startFrom={400}>
            <div className={cx('inner', 'text-center')}>
                {props.year} &copy; NotAgency ОГРНИП 314774601700196
            </div>
        </Animate>
    </div>
);

Footer.propTypes = {
    year: PropTypes.string
};

const mapStateToProps = (state) => ({
    year: state.data.year
});

export default connect(mapStateToProps)(Footer);
