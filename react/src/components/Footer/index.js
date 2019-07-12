import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Animate from '../Animate';
import translate from '../translate';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Footer = ({year, strings}) => (
  <div className={cx(styles.footer)}>
    <Animate type="bottom-to-top" startFrom={1400}>
      <div className={cx(styles.inner, 'text-center')}>
        <div className={cx(styles.item, 'screen-sm-min')}>
          {year} &copy; NotAgency
        </div>
        <div className={cx(styles.item)}>
          {strings.psrn} 314774601700196
        </div>
        <div className={cx(styles.item)}>
          {strings.inn} 771878367680
        </div>
        <div className={'screen-xs-only'}>
          <div className={cx(styles.item)}>
            {year} &copy; NotAgency
          </div>
        </div>
      </div>
    </Animate>
  </div>
);

Footer.propTypes = {
  year: PropTypes.number.isRequired,
  strings: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  year: state.globals.year
});

export default connect(mapStateToProps)(translate('Footer')(Footer));
