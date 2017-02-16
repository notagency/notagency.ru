import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classNames from 'classnames/bind';
import styles from 'css/main';
import ls from 'local-storage';
import {changeLanguage} from 'state/lang';

const cx = classNames.bind(styles);

class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            contentHeight: window.innerHeight
        }
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
        }
    }
      
    fixHeight() {
        var minHeroHeight = 400,
            windowHeight = window.innerHeight,
            contentHeight = windowHeight > minHeroHeight ? windowHeight : minHeroHeight;
        this.setState({contentHeight: contentHeight});
    }
    
    render() {
        const {children} = this.props;
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
  children: PropTypes.object
};

export default connect()(App);