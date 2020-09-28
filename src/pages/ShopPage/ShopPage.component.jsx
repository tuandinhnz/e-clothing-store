import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../actions';

import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container';
import CollectionPageContainer from '../../pages/CollectionPage/CollectionPage.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchCollectionsStart })(ShopPage);
