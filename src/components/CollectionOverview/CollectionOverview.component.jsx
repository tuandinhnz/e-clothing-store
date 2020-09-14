import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForOverview } from '../../selectors/shopData.selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

import { CollectionsOverviewContainer } from './CollectionOverview.styles';

const CollectionOverview = ({ collections }) => {
  const renderedCollectionOverview = collections.map((collection) => {
    return (
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    );
  });
  return (
    <CollectionsOverviewContainer>
      {renderedCollectionOverview}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataForOverview,
});

export default connect(mapStateToProps, null)(CollectionOverview);
