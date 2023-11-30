import ShowCard from "./ShowCard";
import { useStarredShows } from "../../lib/useStarredShows";

const Showsgrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
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
          starred={starredShows.includes(item.show.id)}
        />
      ))}
    </div>
  );
};
export default Showsgrid;
