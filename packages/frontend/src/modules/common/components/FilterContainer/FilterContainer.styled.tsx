import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const FilterContainerStyled = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '40px'
}));

export const FilterCategoryContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1px',
  borderRadius: '5px',
  height: '100%',
  margin: '0',
  width: 'fit-content'
}));
