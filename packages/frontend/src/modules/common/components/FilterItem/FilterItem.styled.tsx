import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const FilterItemContainer = styled(Box)(() => ({
  padding: '6px 24px',
  cursor: 'pointer',
  borderRadius: '5px',
  backgroundColor: '#eeeeee',
  '&:hover': {
    backgroundColor: '#CCD1D1',
    textDecoration: 'underline'
  }
}));
