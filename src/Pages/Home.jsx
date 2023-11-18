import { searchForPeople, searchForShows } from "../api/Tvmaze";
import { useState } from "react";

const Home = () => {
  const [searchOption, setsearchOption] = useState("shows");
  const [searchInput, setSearchInput] = useState("");
  const [api, setApi] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  function radiochange(event) {
    setsearchOption(event.target.value);
  }
  console.log(searchOption);
  function searchChangeHandler(event) {
    setSearchInput(event.target.value);
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      setApiDataError(null);
      if (searchOption === "shows") {
        const result = await searchForShows(searchInput);
        setApi(result);
      } else {
        const result = await searchForPeople(searchInput);
        setApi(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  }

  const renderApiData = () => {
    if (apiDataError) return <div>Error occured : {apiDataError.message}</div>;
    if (api) {
      return api[0].show
        ? api.map((item) => <div id={item.show.id}>{item.show.name}</div>)
        : api.map((item) => <div id={item.person.id}>{item.person.name}</div>);
    }

    return null;
  };
  return (
    <div>
      <form action="submit" onSubmit={submitHandler}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
