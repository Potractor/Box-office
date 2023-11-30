import { Link } from "react-router-dom";

const ShowCard = ({ name, image, id, summary, onStarMeClick, starred }) => {
  const transformedstring = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "not-found";
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>
      <p>{transformedstring}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button onClick={() => onStarMeClick(id)} type="button">
          {starred ? "unstar me" : "star me"}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
