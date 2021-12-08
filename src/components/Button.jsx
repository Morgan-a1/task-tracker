import PropTypes from "prop-types";

function Button({ children, onClick, color }) {
   return (
      <button
         style={{ backgroundColor: color }}
         onClick={onClick}
         className="btn">
            {children}
      </button>
   );
}

Button.defaultProps = {
   color: "steelblue",
}

Button.propTypes = {
   children: PropTypes.node,
   onClick: PropTypes.func,
   color: PropTypes.string,
};

export default Button;
