import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  function searchChangeHandler(event) {
    setSearchInput(event.target.value);
  }
  async function submitHandler(event) {
    event.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchInput}`
    );
    const body = await response.json();
    console.log(body);
  }
  return (
    <div>
      <form action="submit" onClick={submitHandler}>
        <input type="text" onChange={searchChangeHandler}></input>
        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default Home;
