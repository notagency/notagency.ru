import React, { Component } from 'react';
import PageIndexHero from 'components/PageIndexHero';
import PageIndexAbout from 'components/PageIndexAbout';

class Index extends Component {

  render() {
    return (
        <div>
            <PageIndexHero />
            <PageIndexAbout />
        </div>
    );
  }
}

export default Index;