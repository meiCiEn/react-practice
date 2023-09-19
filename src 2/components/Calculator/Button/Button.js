// Button.js will provide the app's interactivity
// Each component will have value and onClick props

import "./Button.css";



const Button = ({ id, value, onClick, className }) => {

  return (
    <button className={className} id={id} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;