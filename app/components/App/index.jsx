/* global window */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import ls from 'local-storage';

import Header from '../Header';
import Footer from '../Footer';
import styles from '../../css/main.css';
import { changeLanguage } from '../../state/lang';

const cx = classNames.bind(styles);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentHeight: window.innerHeight
        };
        this.pathToThemeMap = {
            '/wd': 'black'
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.fixHeight.call(this));
        this.fixHeight();
        const lang = ls('language');
        if (lang) {
            this.props.dispatch(changeLanguage(lang));
        } else if (this.props.langFromBackend) {
            this.props.dispatch(changeLanguage(this.props.langFromBackend));
        }
    }

    fixHeight() {
        const minHeroHeight = 400;
        const windowHeight = window.innerHeight;
        const contentHeight = windowHeight > minHeroHeight ? windowHeight : minHeroHeight;
        this.setState({ contentHeight });
    }

    render() {
        const { children } = this.props;
        const pathname = this.props.location.pathname;
        const theme = this.pathToThemeMap[pathname] ? this.pathToThemeMap[pathname] : '';
        return (
            <div>
                <Header theme={theme} />
                <div className={cx('slide', 'slide_hero', 'slide_hero_' + theme)} height={this.state.contentHeight}>
                    <div className={cx('hero')}>
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
    langFromBackend: PropTypes.string
};

const mapStateToProps = (state) => ({
    langFromBackend: state.data.lang
});

export default connect(mapStateToProps)(App);
