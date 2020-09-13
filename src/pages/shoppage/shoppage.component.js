import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import { Row } from '../../shared';

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <Row>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Row>
  );
};

export default ShopPage;
