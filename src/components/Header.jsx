import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
   return (
      <header className="header">
         <h1>{title}</h1>
         <Button
            onClick={onAdd}
            color={showAdd ? "Red" : "green"}>
            { showAdd ? "Cancel" : "Add" }
         </Button>
      </header>
   );
}

Header.defaultProps = {
   title: "Task Tracker",
};

Header.propTypes = {
   title: PropTypes.string,
   onAdd: PropTypes.func.isRequired,
   showAdd: PropTypes.bool.isRequired,
};

export default Header;
