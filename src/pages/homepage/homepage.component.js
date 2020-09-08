import React from 'react';
import styled from 'styled-components';

import MenuItem from '../../components/MenuItem/MenuItem.component';

import { sections } from '../../assets/data/directory.data';
import { Section, Row } from '../../shared';

const Menu = styled(Row)`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;
const HomePage = () => {
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

export default HomePage;
