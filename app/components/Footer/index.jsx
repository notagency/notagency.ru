import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import Animate from 'components/Animate';
import classNames from 'classnames/bind';
import styles from './styles';
import { type } from 'bootstrap-css'

objectAssign(styles, type);
const cx = classNames.bind(styles);

class Footer extends Component {
  
  render() {
      return (
        <div className={cx('footer')}>
            <Animate type="bottom-to-top" startFrom={400}>
                <div className={cx('inner', 'text-center')}>
                    {this.props.year} &copy; NotAgency ОГРНИП 314774601700196
                </div>
            </Animate>
        </div>
      );
  }
};

Footer.propTypes = {
    year: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    year: state.data.year
  };
}

export default connect(mapStateToProps)(Footer);