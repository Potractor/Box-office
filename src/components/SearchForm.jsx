import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";

const SearchForm = ({ submitHandler }) => {
  const [searchOption, setsearchOption] = useState("shows");
  const [searchInput, setSearchInput] = useSearchStr();
  function radiochange(event) {
    setsearchOption(event.target.value);
  }

  console.log(searchOption);
  function searchChangeHandler(event) {
    setSearchInput(event.target.value);
  }
  function mainHandler(event) {
    event.preventDefault();

    submitHandler(searchInput, searchOption);
  }
  return (
    <div>
      <form action="submit" onSubmit={mainHandler}>
        <input type="text" onChange={searchChangeHandler} />
        <label>
          Shows
          <input
            checked={searchOption === "shows"}
            type="radio"
            name="search-option"
            value="shows"
            onClick={radiochange}
          />
        </label>
        <label>
          Actors
          <input
            checked={searchOption === "actors"}
            type="radio"
            name="search-option"
            value="actors"
            onClick={radiochange}
          />
        </label>

        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default SearchForm;
