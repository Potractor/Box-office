import ShowCard from "./ShowCard";
import { useReducer, useEffect } from "react";
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};
const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.showId);
    case "UNSTAR":
      return currentStarred.filter((showId) => showId !== action.showId);
    default:
      return currentStarred;
  }
};
const Showsgrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowsReducer,
    [],
    "starredShows"
  );
  console.log({ starredShows });
  const onStarMeClick = (showId) => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId: showId });
    } else {
      dispatchStarred({ type: "STAR", showId: showId });
    }
  };
  return (
    <div>
      {shows.map((item) => (
        <ShowCard
          key={item.show.id}
          name={item.show.name}
          id={item.show.id}
          summary={item.show.summary}
          image={item.show.image ? item.show.image.medium : "/not-found.png"}
          onStarMeClick={onStarMeClick}
        />
      ))}
    </div>
  );
};
export default Showsgrid;
