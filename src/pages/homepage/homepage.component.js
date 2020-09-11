import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../../components/MenuItem/MenuItem.component';

import { Section, Row } from '../../shared';
import { selectDirectory } from '../../reducers/directory.selectors';

const Menu = styled(Row)`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;
const HomePage = ({ sections }) => {
  const renderedMenuItems = sections.map((section) => {
    return <MenuItem section={section} key={section.id} />;
  });
  return (
    <>
      <Section>
        <Menu>{renderedMenuItems}</Menu>
      </Section>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectory,
});
export default connect(mapStateToProps, null)(HomePage);
