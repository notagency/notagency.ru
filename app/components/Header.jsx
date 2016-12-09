import React from 'react';
import { Link } from 'react-router'
import Timer from 'helpers/Timer.jsx';

class Header extends Timer {
  render() {
      return (
            <div className="header">
                <div className="header__inner row">
                    <div className={"col-xs-6 animate left-to-right " + (this.state.timer > 200 ? "start-animation" : "")}>
                        <h2 className="header__logo">
                            <Link to="/">
                                <span>NotAgency</span>
                            </Link>
                        </h2>
                    </div>
                    <div className={"col-xs-6 animate right-to-left text-right " + (this.state.timer > 1000 ? "start-animation" : "")}>
                        <a className="header__social" href="https://www.facebook.com/notagency.ru/" target="_blank">
                            <i className="icons icons_facebook"></i>
                        </a>
                    </div>
                </div>
            </div>
      );
  }
};

export default Header;