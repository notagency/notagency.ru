import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class CommonLayout extends React.Component {
  render() {
    const {component: Component, page: Page, authorized, ...rest} = this.props;
    if (!Page) {
      return '';
    }
    return (
      <React.Fragment>
        <Header/>
        <Page {...rest} />
        <Footer/>
      </React.Fragment>
    )
  }
}
export default CommonLayout;
