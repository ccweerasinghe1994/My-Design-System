import { ComponentProps, FC } from 'react';
import './Button.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
}

const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  let className = 'button';

  if (variant === 'secondary') {
    className += ' secondary';
  }

  if (variant === 'destructive') {
    className += ' destructive';
  }

  return <button className={className} {...props} />
}

export default Button;