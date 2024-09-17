

import { ComponentProps, FC } from 'react';
import styles from './Button.module.css';


export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary'|'destructive';
}

const Button:FC<ButtonProps> = ({variant,...props})=>{

  let className = styles.button;

  if(variant === 'secondary'){
    className += ' ' + styles.secondary;
  }

  if(variant === 'destructive'){
    className += ' ' + styles.destructive;
  }
  

  return <button className={ className} {...props}/>
}

export default Button;