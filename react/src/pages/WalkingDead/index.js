import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.scss';
const cx = classNames.bind(styles);

class WalkingDeadPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iframeWidth: 0,
            iframeHeight: 0,
            iframeTop: 0
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.fixSize);
        this.fixSize();
    }

    fixSize = () => {
        const iframeHeight = window.innerHeight / 1.1;
        const iframeWidth = window.innerWidth / 1.1;
        const iframeTop = (window.innerHeight - iframeHeight) / 2;
        this.setState({ iframeWidth, iframeHeight, iframeTop });
    }

    render() {
        const { iframeWidth, iframeHeight, iframeTop } = this.state;
        return (
            <div className={cx('viewport')}>
                <iframe src="https://wd.notagency.ru/" width={`${iframeWidth}px`} height={`${iframeHeight}px`}
                        style={{ top: `${iframeTop}px` }} title="The Walking Dead Game" />
            </div>
        );
    }
}

export default WalkingDeadPage;
