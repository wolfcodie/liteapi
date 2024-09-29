import React, { FC } from 'react';

interface ButtonType {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonType> = ({
  children,
  className,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type} // Ensure the type is used
      className={`py-2 px-5 rounded-lg text-base font-medium ${
        className && className
      }`}
      onClick={onClick} // Attach the onClick event
    >
      {children}
    </button>
  );
};

export default Button;
