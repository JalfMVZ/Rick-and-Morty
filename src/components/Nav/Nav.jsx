import React from "react";
import SearchBar from "../SeachBar/SearchBar";

export default function Nav({ onSearch }) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <div>
        <button>Home</button>
      </div>
      <div>
        <button>About</button>
      </div>
    </div>
  );
}
