import React, { ReactChildren, ReactChild } from 'react';
import { FilterItemContainer } from './FilterItem.styled';

interface Props {
  children: ReactChild | ReactChildren;
}

export const FilterItem = ({ children }: Props) => (
  <FilterItemContainer>{children}</FilterItemContainer>
);
