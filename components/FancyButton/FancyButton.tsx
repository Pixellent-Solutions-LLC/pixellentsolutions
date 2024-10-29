import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import Link from 'next/link';
const buttonStyles = cva(
  [
    'relative overflow-hidden rounded-lg px-6 py-3',
    'font-medium transition-all duration-300',
    'hover:shadow-lg hover:-translate-y-0.5',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
  ],
  {
    variants: {
      colorVariant: {
        primary: [
          'bg-gradient-to-r from-purple-600 to-blue-500',
          'text-white',
          'hover:from-purple-700 hover:to-blue-600',
          'focus:ring-purple-500',
        ],
        secondary: [
          'bg-white/10 backdrop-blur-sm',
          'text-white',
          'border border-white/20',
          'hover:bg-white/20',
          'focus:ring-white',
        ],
      },
    },
    defaultVariants: {
      colorVariant: 'primary',
    },
  }
);

interface FancyButtonProps extends VariantProps<typeof buttonStyles> {
  text: string;
  onClick?: () => void;
  href?: string;
}

export default function FancyButton({ text, colorVariant, onClick, href }: FancyButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <motion.button
          className={buttonStyles({ colorVariant })}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {text}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      className={buttonStyles({ colorVariant })}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {text}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
    </motion.button>
  );
}