import styled from '@emotion/styled';
import { Container, Box } from '@mui/material';
import { ITodoElement } from './TodoElement.interfaces';

export const TodoElementStyled = styled(Container)(({ isHead }: Pick<ITodoElement, 'isHead'>) => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '5px',
  height: isHead ? '30px' : '60px',
  backgroundColor: isHead ? '#424242' : '#eeeeee',
  color: isHead ? '#eeeeee' : '#424242',
  fontWeight: isHead ? '600' : '500'
}));

export const TodoElementTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '25%',
  height: '100%',
  margin: ' 0 5px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: '600'
}));

export const TodoElementDescription = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '45%',
  margin: ' 0 5px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}));

export const TodoElementActions = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  width: '30%',
  gap: '15px'
}));

/* export const TodoText = styled(Typography)(() => ({
  padding: '0 10px'
})); */
