import "./Button.css";

type ButtonProps = {
  name: string;
};

function Button(props: ButtonProps) {
  return (
    <button className='home-button' type='submit'>
      {props.name}
    </button>
  );
}

export default Button;
