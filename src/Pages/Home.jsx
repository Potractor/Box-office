import { searchForShows } from "../api/Tvmaze";
import { useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [api, setApi] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);
  function searchChangeHandler(event) {
    setSearchInput(event.target.value);
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShows(searchInput);
      setApi(result);
    } catch (error) {
      setApiDataError(error);
    }
    console.log(apiDataError);
  }
  const renderApiData = () => {
    if (apiDataError) return <div>Error occured : {apiDataError.message}</div>;
    if (api) {
      return api.map((item) => <div id={item.show.id}>{item.show.name}</div>);
    }
  };
  return (
    <div>
      <form action="submit" onClick={submitHandler}>
        <input type="text" onChange={searchChangeHandler}></input>
        <button type="submit">search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
