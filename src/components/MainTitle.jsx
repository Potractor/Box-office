const AppTitle = (props) => {
  const { title = "BoxOffice", subtitle = "What are you looking for?" } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
export default AppTitle;
