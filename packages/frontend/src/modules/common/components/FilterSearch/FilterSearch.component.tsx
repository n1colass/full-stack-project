import React from 'react';
import { Search } from '@mui/icons-material';
import { SearchContainer, SearchIconWrapper, StyledInputBase } from './FilterSearch.styled';
import { useTodoMutation } from '../../../services/todo.mutation';

export const FilterSearch = () => {
  const [input, setInput] = React.useState('');
  const { searchTodo } = useTodoMutation(input);
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchTodo();
    }
  };

  return (
    <SearchContainer>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <StyledInputBase
        key="search"
        name="Search"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={input}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
    </SearchContainer>
  );
};
