import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }) {
   return (
      <header className="header">
         <h1>{title}</h1>
         <Button color="green">Add</Button>
      </header>
   );
}

Header.defaultProps = {
   title: "Task Tracker",
}

Header.propTypes = {
   title: PropTypes.string,
}

export default Header;
