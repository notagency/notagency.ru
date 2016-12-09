import React, { PropTypes } from 'react';
import Timer from 'helpers/Timer.jsx';

class Footer extends Timer {
  
  render() {
      return (
        <div className={"footer text-center bottom-to-top animate " + (this.state.timer > 400 ? "start-animation" : "")}>
            {this.props.year} &copy; NotAgency ОГРНИП 314774601700196
        </div>
      );
  }
};

Footer.propTypes = {
  year: PropTypes.string.isRequired
};

export default Footer;