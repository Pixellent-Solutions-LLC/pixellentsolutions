import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import styles from './FancyButton.module.css';

const button = cva(
  styles.button,
  {
    variants: {
      colorVariant: {
        green: styles.buttonGreen,
        blue: styles.buttonBlue,
      },
    },
    defaultVariants: {
      colorVariant: 'green',
    },
  }
);

interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  text: string;
  onClick?: () => void;
  colorVariant?: 'green' | 'blue';
}

const FancyButton: React.FC<FancyButtonProps> = ({ text, colorVariant, onClick, ...props }) => {
  return (
    <button className={twMerge(button({ colorVariant }))} onClick={onClick} {...props}>
      <span className={styles.text}>{text}</span>
      <span className={styles.shimmer}></span>
    </button>
  );
};

export default FancyButton;
