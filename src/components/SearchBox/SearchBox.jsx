import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "/src/redux/filtersSlice.js";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel}>
        Find contacts by name
      </label>
      <input
      className={styles.searchInput}
      type="search"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
