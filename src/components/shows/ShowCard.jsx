import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard";
import { StarIcon } from "../common/Starlcon";
const ShowCard = ({ name, image, id, summary, onStarMeClick, starred }) => {
  const transformedstring = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "") + "..."
    : "not-found";
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>

      <h1>{name}</h1>
      <p>{transformedstring}</p>
      <ActionSection>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <StarBtn onClick={() => onStarMeClick(id)} type="button">
          <StarIcon active={starred} />
          {/* {starred ? "unstar me" : "star me"} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
