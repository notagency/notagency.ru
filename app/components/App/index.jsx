import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import classNames from 'classnames/bind';
import styles from 'css/main';

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

export default App;