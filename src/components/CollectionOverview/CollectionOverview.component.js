import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataForOverview } from '../../reducers/shopData.selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview.component';

import './collections-overview.styles.scss';

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
    <div className="collections-overview">{renderedCollectionOverview}</div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataForOverview,
});

export default connect(mapStateToProps, null)(CollectionOverview);
