import React, { PropTypes } from 'react';
import Timer from 'helpers/Timer.jsx';

class Footer extends Timer {
  
  render() {
      return (
        <div className={"footer text-center bottom-to-top animate " + (this.state.timer > 400 ? "start-animation" : "")}>
            <div className="col-xs-2">
                {/*<a href="/join/">Разработчикам</a>*/}
            </div>
            <div className="col-xs-8">
                {this.props.year} &copy; NotAgency ОГРНИП 314774601700196
            </div>
            <div className="col-xs-2">
            </div>
        </div>
      );
  }
};

Footer.propTypes = {
  year: PropTypes.string.isRequired
};

export default Footer;