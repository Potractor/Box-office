import ShowCard from "./ShowCard";

const Showsgrid = ({ shows }) => {
  return (
    <div>
      {shows.map((item) => (
        <ShowCard
          key={item.show.id}
          name={item.show.name}
          id={item.show.id}
          summary={item.show.summary}
          image={item.show.image ? item.show.image.medium : "/not-found.png"}
        />
      ))}
    </div>
  );
};
export default Showsgrid;
