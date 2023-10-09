import { FC, ChangeEvent } from "react";

interface FilterProps {
  filter: string;
  handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Filter: FC<FilterProps> = ({ filter, handleFilterChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        // className={css.inputSearch}
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
