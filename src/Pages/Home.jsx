import { searchForPeople, searchForShows } from "../api/Tvmaze";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [api, setApi] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  async function submitHandler(searchInput, searchOption) {
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
      <SearchForm submitHandler={submitHandler} />

      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
