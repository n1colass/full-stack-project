import React from 'react';
import { Container } from '@mui/material';
import { TodoContainer } from '../common/components/TodoContainer';
import { FilterContainer } from '../common/components/FilterContainer';

const HomePageContainer = () => (
  <Container
    maxWidth="lg"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: '100px'
    }}
  >
    <FilterContainer />
    <TodoContainer />
  </Container>
);

export default HomePageContainer;
