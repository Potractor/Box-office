import { searchForPeople, searchForShows } from "../api/Tvmaze";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchForm from "../components/SearchForm";
import Showsgrid from "../components/shows/Showsgrid";
import ActorsGrid from "../components/actors/ActorsGrid";

const Home = () => {
  // const [filter, setFilter] = useState(null);

  // console.log(filter);
  // const { data, error: apiDataError } = useQuery({
  //   queryKey: ["search", filter],
  //   queryFn: () => searchForPeople(filter.searchInput),
  // });

  const [api, setApi] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  async function submitHandler(searchInput, searchOption) {
    // setFilter(searchInput, searchOption);
    // setapi(data);
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
    if (api?.length === 0)
      return (
        <div>
          <p>No results found </p>
        </div>
      );
    if (api) {
      return api[0].show ? (
        <Showsgrid shows={api} />
      ) : (
        <ActorsGrid actors={api} />
      );
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
