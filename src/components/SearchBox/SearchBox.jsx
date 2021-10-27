import React, { useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const SearchBox = ({ fullScreen, onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = ({ target: { value } }) => setQuery(value);

  return (
    <form onSubmit={handleSubmit} className={classnames('search-wrapper', { shrink: !fullScreen })}>
      <input
        className="search-input"
        placeholder="What images would ypu like to see on Pixabay?"
        onChange={handleChange}
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
};

SearchBox.defaultProps = {
  fullScreen: true,
};

SearchBox.propTypes = {
  fullScreen: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
