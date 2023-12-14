import styles from './styles.module.css'

interface ButtonProps {
  onClick: () => void;
  text: string;
  ariaLabel: string;
}

const Button = ({ onClick,text, ariaLabel }: ButtonProps) => {
  return (
    <button id="myBtn" className={styles.btn} onClick={onClick} aria-label={ariaLabel}>
      {text}
    </button>
  );
};

export default Button;
