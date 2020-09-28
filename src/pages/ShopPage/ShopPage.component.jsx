import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../actions';

import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container';
import CollectionPageContainer from '../../pages/CollectionPage/CollectionPage.container';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

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
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
