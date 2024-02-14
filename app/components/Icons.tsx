interface iconsProps {
    className?: string;
  }

export const heartIcon: React.FC<iconsProps> = ({ className, ...rest}) => (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
        strokeWidth={1.536}
        aria-hidden="true"
        width={32}  
        height={32}
        viewBox="0 0 64 64"
    {...rest}
    className={`w-full h-auto ${className}`}
    >
    <path
      fill="#ff5a79"
      d="M46.1 2C39.8 2 34.5 5.6 32 10.8 29.5 5.6 24.2 2 17.9 2 9.2 2 2 9.4 2 17.9 2 32.4 32 62 32 62s30-29.6 30-44.1C62 9.4 54.8 2 46.1 2z"
    />
  </svg>
);


