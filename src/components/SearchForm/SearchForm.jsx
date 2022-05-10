import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  SearchBarButton,
  SearchBarInput,
  SearchForm,
} from './SearchForm.styled';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    if (searchQuery.trim() === '') {
      return toast('The search cannot be performed without a query');
    }
    onSubmit(searchQuery);
    e.currentTarget.reset();
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchBarButton type="submit">
        <span>Search</span>
      </SearchBarButton>

      <SearchBarInput
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Toaster />
    </SearchForm>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
