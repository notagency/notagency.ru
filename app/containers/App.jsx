import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
class App extends Component {
  render() {
    const {children, year, isMobile, fromMainPage} = this.props;
    return (
        <div>
            <Header isMobile={isMobile} fromMainPage={fromMainPage} />
            {children}
            <Footer year={year} isMobile={isMobile} fromMainPage={fromMainPage} />
        </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    year: state.data.year,
    isMobile: state.data.isMobile,
    fromMainPage: state.data.fromMainPage
  };
}

export default connect(mapStateToProps)(App);