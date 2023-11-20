import ActorsCard from "./ActorsCard";
const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map((item) => (
        <ActorsCard
          key={item.person.id}
          name={item.person.name}
          gender={item.person.gender}
          birthdate={item.person.birthday}
          deathdate={item.person.deathday}
          country={item.person.country ? item.person.country.name : null}
          id={item.person.id}
          image={
            item.person.image ? item.person.image.medium : "/not-found.png"
          }
        />
      ))}
    </div>
  );
};
export default ActorsGrid;
