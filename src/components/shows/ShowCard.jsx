import { Link } from "react-router-dom";

const ShowCard = ({ name, image, id, summary }) => {
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
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCard;
