import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './styles';
const cx = classNames.bind(styles);

class Animate extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          appear: false
      };
  }
  
  componentDidMount() {
    if (this.props.isMobile || !this.props.fromMainPage) {
        return;
    }
    var self = this,
        timer = 0,
        limit = this.props.startFrom,
        increment = 100,
        intervalId = setInterval(function() {
            timer += increment;
            if (timer === limit) {
                clearInterval(intervalId);
                self.setState({appear: true})                
            }
        }, increment);
  }
  
  render() {
      return (
        <div className={cx(
            this.props.type,
            {
                'animate': !this.props.isMobile && this.props.fromMainPage,
                'start-animation': this.state.appear
            }
        )} >
            {this.props.children}
        </div>
      )
  }
}

Animate.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    fromMainPage: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    startFrom: PropTypes.number.isRequired,
    children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    isMobile: state.data.isMobile,
    fromMainPage: state.data.fromMainPage
  };
}

export default connect(mapStateToProps)(Animate);