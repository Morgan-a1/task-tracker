import PropTypes from "prop-types";

function Button({ children, onClick, color, type, block }) {
   const btnClasses = "btn " + (block ? "btn-block" : "");
   return (
      <button
         type={type}
         style={{ backgroundColor: color }}
         onClick={onClick}
         className={btnClasses}
      >
            {children}
      </button>
   );
}

Button.defaultProps = {
   color: "steelblue",
   type: "button",
   block: false,
}

Button.propTypes = {
   children: PropTypes.node,
   onClick: PropTypes.func,
   color: PropTypes.string,
   type: PropTypes.string,
   block: PropTypes.bool,
};

export default Button;
