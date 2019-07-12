import React from 'react';
import {Route} from 'react-router-dom';

class PublicRoute extends React.Component {

  render() {
    const {component: Layout, page: Page, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
            return <Layout page={Page} {...props}/>;
          }
        }
      />
    )
  }

}

export default PublicRoute;
