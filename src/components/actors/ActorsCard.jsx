const ActorsCard = ({ name, image, gender, country, birthdate, deathdate }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country knows"}</p>
      {!!birthdate && <p>Born {birthdate}</p>}
      <p>{deathdate ? `Died ${deathdate}` : "Alive"}</p>
    </div>
  );
};
export default ActorsCard;
