import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './styles.css';

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
        const limit = this.props.startFrom;
        const increment = 10;
        let timer = 0;
        const intervalId = setInterval(() => {
            timer += increment;
            if (timer === limit) {
                clearInterval(intervalId);
                this.setState({ appear: true });
            }
        }, increment);
    }

    render() {
        return (
            <div className={cx(
                this.props.type,
                {
                    animate: !this.props.isMobile && this.props.fromMainPage,
                    'start-animation': this.state.appear
                }
            )}>
                {this.props.children}
            </div>
        );
    }
}

Animate.propTypes = {
    isMobile: PropTypes.bool,
    fromMainPage: PropTypes.bool,
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
