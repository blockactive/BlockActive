"use client";

import { useState } from "react";
/* import { Link } from "next"; */ // Asegúrate de importar el enlace correcto para tu enrutador
import axios from "axios";
import styles from "@/app/styles/home.module.css";


export default function SearchBox() {
  const [searchInput, setSearchInput] = useState("");

/*   const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };
 */
  /* const handleSearch = async () => {
    document.querySelector("#inputField").value = "";

    // Redirigir directamente a la ruta /address/[addressHash]
    window.location.href = `/address/${searchInput}`;
  }; */

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
            /*   */
          />
          <button className={styles.btn} /* onClick={handleSearch} */>
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
}
