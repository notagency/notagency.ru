import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

class Animate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appear: false
    };
  }

  componentDidMount() {
    // if (this.props.isMobile || !this.props.fromMainPage) {
    //  return;
    //}
    const limit = this.props.startFrom;
    const increment = 10;
    let timer = 0;
    const intervalId = setInterval(() => {
      timer += increment;
      if (timer === limit) {
        clearInterval(intervalId);
        this.setState({appear: true});
      }
    }, increment);
  }

  render() {
    return (
      <div className={classNames(
        this.props.type,
        {
          // animate: !this.props.isMobile && this.props.fromMainPage,
          animate: true,
          'start-animation': this.state.appear
        }
      )}>
        {this.props.children}
      </div>
    );
  }
}

Animate.propTypes = {
  // isMobile: PropTypes.bool,
  fromMainPage: PropTypes.bool,
  type: PropTypes.string.isRequired,
  startFrom: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

function mapStateToProps(state) {
  return {
    // isMobile: state.data.isMobile,
    // fromMainPage: state.data.fromMainPage
  };
}

export default connect(mapStateToProps)(Animate);
