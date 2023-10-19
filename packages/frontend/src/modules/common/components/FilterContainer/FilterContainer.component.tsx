import React from 'react';
import { FilterContainerStyled, FilterCategoryContainer } from './FilterContainer.styled';
import { FilterItem } from '../FilterItem';
import { FilterSearch } from '../FilterSearch';

export const FilterContainer = () => (
  <FilterContainerStyled>
    <FilterCategoryContainer>
      <FilterItem>All</FilterItem>
      <FilterItem>Public</FilterItem>
      <FilterItem>Private</FilterItem>
      <FilterItem>Completed</FilterItem>
    </FilterCategoryContainer>
    <FilterSearch />
  </FilterContainerStyled>
);
