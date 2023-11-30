import { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import { CustomRadio } from "../CustomRadio";
import styled from "styled-components";

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
        <SearchInput
          type="text"
          placeholder="search for something"
          onChange={searchChangeHandler}
        />
        <RadiosWrapper>
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
        </RadiosWrapper>
        <SearchButtonWrapper>
          <button type="submit">search</button>
        </SearchButtonWrapper>
      </form>
    </div>
  );
};
export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
