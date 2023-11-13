import { Link } from "react-router-dom";
const LINK = [
  { text: "home", to: "/" },
  { text: "starred", to: "/starred" },
];
const Navs = () => {
  return (
    <ul>
      {LINK.map((item) => (
        <li id={item.to}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Navs;
