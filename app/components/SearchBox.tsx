"use client";

import React, { useState } from "react";
import styles from "@/app/styles/home.module.css";

interface SearchBoxProps {
  onSearchClick: () => void; // Prop to handle search click
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearchClick }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className="w-full">
      <section className={styles.searchSection}>
        <h3>Block activity</h3>
        <section className={styles.input_section}>
          <input
            className={styles.inputField}
            type="text"
            id="inputField"
            name="inputField"
            maxLength={120}
            placeholder="Search by Address"
            required
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className={styles.btn} onClick={onSearchClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </section>
    </section>
  );
};

export default SearchBox;
