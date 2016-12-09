import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Index from 'containers/Index';
import Page404 from 'components/Page404';

export default () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={Index} />
      <Route path="*" component={Page404} />
    </Route>
  );
};
