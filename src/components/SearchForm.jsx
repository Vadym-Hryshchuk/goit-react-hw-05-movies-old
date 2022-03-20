import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

// import { FcSearch } from 'react-icons/fc';
// import { ReactComponent as Pixabay } from './pixabay.svg';
// import {
//   Header,
//     SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from './Searchbar.styled';

const SearchForm = ({ onSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Toaster />
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
