import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'components/App';
import PageIndex from 'components/PageIndex';
import Page404 from 'components/Page404';

export default () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={PageIndex} />
      <Route path='only-header' />
      <Route path="*" component={Page404} />
    </Route>
  );
};
