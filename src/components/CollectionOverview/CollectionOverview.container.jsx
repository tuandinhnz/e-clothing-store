import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../selectors/shopData.selectors';

import WithSpinner from '../WithSpinner/WithSpinner.component';
import CollectionOverView from './CollectionOverview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverView);

export default CollectionOverviewContainer;
