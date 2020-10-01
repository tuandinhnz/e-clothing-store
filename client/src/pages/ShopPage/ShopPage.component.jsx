import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner.component';

import { fetchCollectionsStart } from '../../actions';

// import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container';
// import CollectionPageContainer from '../../pages/CollectionPage/CollectionPage.container';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/CollectionOverview/CollectionOverview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../../pages/CollectionPage/CollectionPage.container')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, { fetchCollectionsStart })(ShopPage);
