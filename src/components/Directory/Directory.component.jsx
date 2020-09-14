import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectory } from '../../selectors/directory.selectors';

import MenuItem from '../MenuItem/MenuItem.component';
import { DirectoryContainer } from './Directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectory,
});

export default connect(mapStateToProps)(Directory);
