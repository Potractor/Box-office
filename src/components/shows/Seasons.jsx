const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>total seasons :{seasons.length}</p>
      <p>
        Episode in total :
        {seasons.reduce((sum, season) => sum + season.episondeOrder, 0)}
      </p>
      <div>
        {seasons.map((season) => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episodes: {season.episondeOrder}</p>
            <div>
              Aired : {season.premierData} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Seasons;
