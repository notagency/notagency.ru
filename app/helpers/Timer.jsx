import React, { Component, PropTypes } from 'react';

class Timer extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
        timer: 0
      };
  }
  
  componentDidMount() {
    if (!this.props.isMobile && this.props.fromMainPage) {
        var self = this,
            seconds = 0,
            secondsIncrement = 100,
            maxSeconds = 1500,
            intervalId = setInterval(function() {
                self.setState({timer: seconds})
                seconds += secondsIncrement;
                if (seconds == maxSeconds) {
                    clearInterval(intervalId);
                }
            }, secondsIncrement);
    }
  }
}

Timer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  fromMainPage: PropTypes.bool.isRequired
};

export default Timer;