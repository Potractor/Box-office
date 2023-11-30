import { SearchCard, SearchImgWrapper } from "../common/SearchCard";
const ActorsCard = ({ name, image, gender, country, birthdate, deathdate }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country knows"}</p>
      {!!birthdate && <p>Born {birthdate}</p>}
      <p>{deathdate ? `Died ${deathdate}` : "Alive"}</p>
    </SearchCard>
  );
};
export default ActorsCard;
