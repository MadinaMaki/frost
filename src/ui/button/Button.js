import './Button.css';

export const buttonStyles = {
  primary: 'Button primary',
  normal: 'Button normal',
};

function Button(props) {
  let buttonStyle = props.buttonStyle;
  if (buttonStyle === undefined) {
    buttonStyle = buttonStyles.primary;
  }
  return (
    <button className={buttonStyle} onClick={props.onClick}>
      {props.text} {props.onClick}
    </button>
  );
}

export default Button;