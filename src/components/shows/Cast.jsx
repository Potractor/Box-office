const Cast = ({ cast }) => {
  console.log(cast);
  return (
    <div>
      {cast.map((item) => (
        <div key={item.person.id}>
          <div>
            <img
              src={
                item.person.image
                  ? item.person.image.medium
                  : "/not-found-image.png"
              }
              alt="not-found"
            />
          </div>
          <div>
            {item.person.name} | {item.character.name}{" "}
            {item.voice && "| Voiceover"}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cast;
