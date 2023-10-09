import PropTypes from 'prop-types';
import css from './Filter.module.css';
export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <label className={css.labelSearch}>Find contacts by name</label>
      <input
        className={css.inputSearch}
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};
