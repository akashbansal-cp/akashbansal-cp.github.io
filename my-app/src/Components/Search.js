import { useState } from "react";

const Search = ({ setItemList }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-area">
      <div>
        <input
          type="text"
          placeholder="Search your favourite rapper / artist"
          id="query"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
        <button
          className="search"
          onClick={() => {
            gapi.client.kgsearch.entities
              .search({ query: query, limit: 10 })
              .then(
                (response) => {
                  // Handle the results here (response.result has the parsed body).
                  const data = response.result["itemListElement"];
                  setItemList(data);
                },
                (err) => {
                  console.error("Execute error", err);
                }
              );
          }}
        >
          Search
        </button>
      </div>
      <div>
        <select id="s1" className="select">
          <option value="iX">Discover</option>
          <option value="iY">Familiar</option>
          <option value="">Blend</option>
        </select>
        <select id="s2" className="select">
          <option value="rX">Low</option>
          <option value="">Medium</option>
          <option value="rZ">High</option>
        </select>
      </div>
    </div>
  );
};

export default Search;