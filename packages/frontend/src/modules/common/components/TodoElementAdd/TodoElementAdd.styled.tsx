import styled from '@emotion/styled';
import { Box, Button, TextField } from '@mui/material';

export const TodoElementAddStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}));

export const TodoAddButton = styled(Button)(() => ({
  margin: '0 0 0 auto',
  padding: '5px  15px',
  color: 'white',
  fontWeight: '600',
  backgroundColor: '#2ECC71',
  textTransform: 'uppercase',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#28B463'
  }
}));

export const TodoAddForm = styled('form')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5px',
  width: '100%',
  margin: '10px 0',
  borderRadius: '5px'
}));

export const TodoAddTitle = styled(TextField)(() => ({
  width: '25%'
}));

export const TodoAddDescription = styled(TextField)(() => ({
  width: '65%'
}));
