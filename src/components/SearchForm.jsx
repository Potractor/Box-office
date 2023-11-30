import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import { CustomRadio } from "../CustomRadio";

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

        <CustomRadio
          label="Shows"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={radiochange}
        />

        <CustomRadio
          label="Actors"
          name="search-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={radiochange}
        />

        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default SearchForm;
