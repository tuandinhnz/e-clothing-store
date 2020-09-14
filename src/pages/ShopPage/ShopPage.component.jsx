import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component';
import CollectionPage from '../CollectionPage/CollectionPage.component';

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
